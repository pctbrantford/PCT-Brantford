import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbs = (p) => path.resolve(__dirname, p);

const rawTemplate = fs.readFileSync(toAbs("dist/index.html"), "utf-8");
const serverEntryUrl = pathToFileURL(toAbs("dist/server/entry-server.js")).href;
const { render } = await import(serverEntryUrl);

const routesToPrerender = [
  "/",
  "/services",
  "/about",
  "/contact",
  "/terms-and-conditions",
  "/privacy-policy",
];

console.log("🚀 Starting Static Site Generation (SSG) Pre-rendering...");

for (const url of routesToPrerender) {
  const { html: appHtml, helmet } = render(url);

  let headMarkup = [
    helmet?.title?.toString() || "",
    helmet?.meta?.toString() || "",
    helmet?.link?.toString() || "",
    helmet?.script?.toString() || "",
  ]
    .filter(Boolean)
    .join("\n    ");

  let bodyContent = appHtml;

  // Extract head tags (title, meta, link, script) if they were rendered at top of appHtml
  const headTagsMatch = appHtml.match(/^((?:<(?:title|meta|link)[^>]*>)*(?:<script[^>]*>[\s\S]*?<\/script>)*)([\s\S]*)$/i);
  if (headTagsMatch && headTagsMatch[1]) {
    const extractedHead = headTagsMatch[1];
    bodyContent = headTagsMatch[2];
    if (!headMarkup.includes(extractedHead)) {
      headMarkup += `\n    ${extractedHead}`;
    }
  }

  let html = rawTemplate;

  if (html.includes("<!--app-head-->")) {
    html = html.replace("<!--app-head-->", headMarkup);
  } else {
    html = html.replace("</head>", `\n    ${headMarkup}\n  </head>`);
  }

  if (html.includes("<!--app-html-->")) {
    html = html.replace("<!--app-html-->", bodyContent);
  } else {
    html = html.replace('<div id="root"></div>', `<div id="root">${bodyContent}</div>`);
  }

  const filePath =
    url === "/"
      ? "dist/index.html"
      : `dist${url}/index.html`;

  const dir = path.dirname(toAbs(filePath));
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(toAbs(filePath), html);
  console.log(`  ✓ Pre-rendered: ${url} -> ${filePath}`);
}

try {
  fs.rmSync(toAbs("dist/server"), { recursive: true, force: true });
  console.log("  ✓ Cleaned up temporary server build directory.");
} catch {
  // ignore
}

console.log("🎉 SSG Pre-rendering complete!");

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const { firstName, lastName, phone, email, service, message } = req.body;

    // Basic validation
    if (!firstName || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
      });
    }

    const customerName = `${firstName} ${lastName || ""}`.trim();

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "PCT Website <onboarding@resend.dev>",
      to: [process.env.RESEND_TO_EMAIL || "nandanmaiya21@gmail.com"],
      replyTo: email,
      subject: `New Repair Inquiry — ${customerName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7fa; margin: 0; padding: 20px; color: #1e293b; }
            .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
            .header { background-color: #07111f; padding: 28px 32px; border-bottom: 4px solid #25c7a7; }
            .header h1 { color: #ffffff; margin: 0; font-size: 22px; letter-spacing: -0.02em; }
            .header p { color: #25c7a7; margin: 4px 0 0 0; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; }
            .body { padding: 32px; }
            .badge { display: inline-block; background-color: #e6fffa; color: #047857; font-size: 12px; font-weight: 700; padding: 4px 12px; border-radius: 9999px; text-transform: uppercase; margin-bottom: 20px; }
            .field-group { margin-bottom: 20px; }
            .label { font-size: 11px; text-transform: uppercase; font-weight: 700; color: #64748b; letter-spacing: 0.05em; margin-bottom: 4px; }
            .value { font-size: 16px; font-weight: 600; color: #0f172a; }
            .value a { color: #25c7a7; text-decoration: none; }
            .divider { height: 1px; background-color: #e2e8f0; margin: 24px 0; }
            .message-box { background-color: #f8fafc; border-left: 4px solid #07111f; padding: 16px 20px; border-radius: 0 8px 8px 0; font-size: 15px; line-height: 1.6; color: #334155; }
            .footer { background-color: #f8fafc; padding: 20px 32px; font-size: 12px; color: #94a3b8; text-align: center; border-top: 1px solid #e2e8f0; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <h1>Personal Computer Terminal</h1>
              <p>New Repair Inquiry Received</p>
            </div>
            
            <div class="body">
              <div class="badge">Repair Request</div>
              <div class="field-group">
                <div class="label">Customer Name</div>
                <div class="value">${customerName}</div>
              </div>
              <div class="field-group">
                <div class="label">Email Address</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="field-group">
                <div class="label">Phone Number</div>
                <div class="value">${phone ? `<a href="tel:${phone}">${phone}</a>` : "Not provided"}</div>
              </div>
              <div class="field-group">
                <div class="label">Service Requested</div>
                <div class="value">${service || "Not specified"}</div>
              </div>
              <div class="divider"></div>
              <div class="field-group">
                <div class="label">Issue Description</div>
                <div class="message-box">${message.replace(/\n/g, "<br>")}</div>
              </div>
            </div>
            <div class="footer">
              Sent automatically from the PCT Brantford website contact form.
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return res.status(500).json({
        success: false,
        message: error.message || "Unable to send your message.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Your request has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong.",
    });
  }
}

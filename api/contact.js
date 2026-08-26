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
    const {
      firstName,
      lastName,
      phone,
      email,
      service,
      message,
    } = req.body;

    // Basic validation
    if (!firstName || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
      });
    }

    const customerName = `${firstName} ${lastName || ""}`.trim();

    const { data, error } = await resend.emails.send({
      from: "https://www.nandanmaiya.in/",
      to: ["nandanmaiya21@gmail.com"],
      replyTo: email,
      subject: `New Repair Inquiry — ${customerName}`,

      html: `
        <h2>New Repair Inquiry</h2>

        <p><strong>Name:</strong> ${customerName}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>

        <p><strong>Service:</strong> ${service || "Not specified"}</p>

        <h3>Customer Message</h3>

        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return res.status(500).json({
        success: false,
        message: "Unable to send your message.",
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
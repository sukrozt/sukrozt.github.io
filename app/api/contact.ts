import type { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require("nodemailer");


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    console.log("New Contact Message:", { name, email, message });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "your-email@gmail.com",
        pass: "your-email-password",
      },
    });

    const mailOptions = {
      from: email,
      to: "sukriyeo13@gmail.com",
      subject: `New Contact Message from ${name}`,
      text: message,
    };
    
    interface MailOptions {
        from: string;
        to: string;
        subject: string;
        text: string;
    }

    interface Transporter {
        sendMail(mailOptions: MailOptions, callback: (error: Error | null, info: { response: string }) => void): void;
    }

    transporter.sendMail(mailOptions, (error: Error | null, info: { response: string }) => {
        if (error) {
            return res.status(500).json({ error: "Failed to send email." });
        }
        console.log("Email sent: " + info.response);
    });

    return res.status(200).json({ success: true, message: "Message received!" });
  }

  res.status(405).json({ error: "Method Not Allowed" });
}

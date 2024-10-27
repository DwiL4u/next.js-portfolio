import { Resend } from "resend";
import ReplyEmailTemplate from "../../components/ReplyEmailTemplate";
import { render } from "@react-email/render";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
 
  const {
    name: senderName,
    email: senderEmail,
    subject,
    message,
  } = await req.json();

  console.log("Incoming request body:", {
    senderName,
    senderEmail,
    subject,
    message,
  });

  if (!senderName || !senderEmail || !subject || !message) {
    console.error("Missing required fields");
    return new Response(
      JSON.stringify({ success: false, message: "All fields are required." }),
      { status: 400 }
    );
  }

  try {
    // Render the email template to HTML
    const emailHTML = render(
      <ReplyEmailTemplate
        senderName={senderName || "Your Name"}
        yourName="Dwi Lenggani"
        message={message}
      />
    );
    

    // Send the email using Resend
    const response = await resend.emails.send({
      from: "Dwi Lenggani <contact@dwilenggani.com>",
      to: [senderEmail],
      subject: `Re: ${subject || "Your Message from Portfolio"}`,
      html: emailHTML,
    });

   

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Failed to send email:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to send email",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}

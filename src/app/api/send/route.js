import { Resend } from "resend";
import ReplyEmailTemplate from "../../components/ReplyEmailTemplate";
import { render } from "@react-email/render";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const res = NextResponse.next();

  // Set CORS headers
  res.headers.set("Access-Control-Allow-Origin", "https://dwilenggani.net");
  res.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  // Handle preflight OPTIONS request
  if (req.method === "OPTIONS") {
    return res; // Respond to preflight requests
  }
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { success: false, message: "Missing API key." },
      { status: 500 }
    );
  }

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
    await resend.emails.send({
      from: "Dwi Lenggani <contact@dwilenggani.com>",
      to: [senderEmail],
      subject: `Re: ${subject || "Your Message from Portfolio"}`,
      html: emailHTML,
    });

    // Set the response headers and body for success
    return NextResponse.json({ success: true }); // Correctly return the response
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send the email." },
      { status: 500 }
    );
  }
}
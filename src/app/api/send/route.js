import { Resend } from "resend";
import ReplyEmailTemplate from "../../components/ReplyEmailTemplate";
import { render } from "@react-email/render";

const resend = new Resend(process.env.RESEND_API_KEY);
console.log("Resend instance:", resend); 
console.log("Available methods:", Object.keys(resend)); 
console.log("Resend API Key:", process.env.RESEND_API_KEY);


export async function POST(req) {
  // Log the incoming request body
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


try {
  // Render the email template to HTML
  const emailHTML = render(
    <ReplyEmailTemplate
      senderName={senderName || "Your Name"}
      yourName="Dwi Lenggani"
      message={message}
    />
  );

  // Log the rendered email HTML
  console.log("Rendered email HTML:", emailHTML);

  // Send the email using Resend
  const response = await resend.emails.send({
    from: "Dwi Lenggani <business@dwilenggani.com>",
    to: [senderEmail],
    subject: `Re: ${subject || "Your Message from Portfolio"}`,
    html: emailHTML,
  });

  console.log("Resend response:", response);

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

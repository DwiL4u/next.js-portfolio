// components/ReplyEmailTemplate.jsx
import { Html } from "@react-email/html";


const ReplyEmailTemplate = ({ senderName, yourName, message }) => {
  return (
    <Html>
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          lineHeight: "1.6",
          color: "#333",
        }}
      >
        <table
          width="100%"
          cellPadding="0"
          cellSpacing="0"
          style={{
            margin: "0 auto",
            padding: "20px",
            maxWidth: "600px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  textAlign: "center",
                  padding: "20px 0",
                  backgroundColor: "#4A90E2",
                  color: "#fff",
                }}
              >
                <h1>Thank You for Reaching Out!</h1>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                style={{
                  padding: "20px",
                  backgroundColor: "#fff",
                  border: "1px solid #ddd",
                }}
              >
                <h2>Hello {senderName},</h2>
                <p>
                  Thank you for your message! I appreciate you taking the time
                  to get in touch.
                </p>
                <p
                  style={{
                    fontStyle: "italic",
                    padding: "10px",
                    backgroundColor: "#f0f0f0",
                    borderRadius: "4px",
                  }}
                >
                  {message}
                </p>
                <p>I will get back to you as soon as possible.</p>
                <p>Best regards,</p>
                <p>
                  <strong>{yourName}</strong>
                </p>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "20px 0",
                  textAlign: "center",
                  fontSize: "12px",
                  color: "#777",
                }}
              >
                <p>
                  © {new Date().getFullYear()} {yourName}. All rights reserved.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Html>
  );
};

export default ReplyEmailTemplate;

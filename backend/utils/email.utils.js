const nodemailer = require('nodemailer');
const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);

// const mailer = nodemailer.createTransport({
//     service:'gmail',
//     host:'smtp.gmail.com',
//     port:587,
//     secure:false,
//     auth:{
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS
//     }
// }) 
async function sendBusinessVerificationMail(mailData){
    const mailOptions = {
        from: process.env.SMTP_USER,
        to: mailData.email,
        subject:'Verify your business account',
        text:`Hi ${mailData.name || ''},\n\nPlease confirm your account by clicking the link below:\n\n${mailData.verificationLink}\n\nThis link expires in ${mailData.expiryHours} hours.\n\nIf you didn't request this, ignore this email.`,
        html: `<p>Hi ${mailData.name || ''},</p>
        <p>Please confirm your account by clicking the link below:</p>
        <p><a href="${mailData.verificationLink}">Confirm my account</a></p>
        <p>This link expires in ${mailData.expiryHours} hours.</p>`
    }
    try{
        const result = await resend.emails.send(mailOptions);
        console.log(result);
        return true;
    }
    catch(error){
        console.log(error);
        console.error('send-verification error',error);
        return false;
    }
}

async function sendBookingDetailsMail(mailData){
  const businessHtml = `
  <div style="margin:0;padding:0;background:#faf7f4;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;">
    <div style="max-width:540px;margin:24px auto;padding:0 16px;">

      <!-- Brand header -->
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;">
        <div style="display:flex;align-items:center;gap:8px;">
          <div style="width:32px;height:32px;border-radius:999px;background:linear-gradient(135deg,#7b2eff,#8f3eff);display:flex;align-items:center;justify-content:center;color:#ffffff;font-size:16px;font-weight:700;">
            B
          </div>
          <div>
            <div style="font-size:16px;font-weight:600;color:#0f172a;letter-spacing:-0.03em;">BookLeaf</div>
            <div style="font-size:12px;color:#6b7280;">New booking received</div>
          </div>
        </div>
        <span style="font-size:11px;color:#9ca3af;">${new Date().toLocaleString()}</span>
      </div>

      <!-- Main card -->
      <div style="
        background:#ffffff;
        border-radius:14px;
        border:1px solid rgba(15,23,42,0.06);
        box-shadow:0 12px 30px rgba(15,23,42,0.05);
        padding:18px 18px 16px 18px;
      ">

        <h2 style="font-size:18px;margin:0 0 6px;color:#0f172a;letter-spacing:-0.02em;">
          New booking received
        </h2>

        <p style="margin:0 0 16px;color:#4b5563;font-size:14px;line-height:1.6;">
          You’ve received a new booking via your BookLeaf page. Here are the details:
        </p>

        <!-- Customer -->
        <div style="padding-top:10px;padding-bottom:10px;border-top:1px solid rgba(148,163,184,0.25);">
          <div style="font-size:12px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.08em;font-weight:600;margin-bottom:4px;">
            Customer
          </div>
          <p style="margin:0 0 2px;font-size:14px;color:#0f172a;">
            <strong>${mailData.customer_name}</strong>
          </p>
          <p style="margin:0 0 2px;font-size:13px;color:#4b5563;">
            ${mailData.customer_email}
          </p>
          <p style="margin:0;font-size:13px;color:#4b5563;">
            ${mailData.customer_phone}
          </p>
        </div>

        <!-- Appointment -->
        <div style="padding-top:10px;padding-bottom:10px;border-top:1px solid rgba(148,163,184,0.25);">
          <div style="font-size:12px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.08em;font-weight:600;margin-bottom:4px;">
            Appointment
          </div>
          <p style="margin:0 0 2px;font-size:13px;color:#0f172a;">
            <strong>Date:</strong> ${mailData.booked_date}
          </p>
          <p style="margin:0;font-size:13px;color:#0f172a;">
            <strong>Time:</strong> ${mailData.booked_time}
          </p>
        </div>

        <!-- Message -->
        <div style="padding-top:10px;padding-bottom:10px;border-top:1px solid rgba(148,163,184,0.25);">
          <div style="font-size:12px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.08em;font-weight:600;margin-bottom:4px;">
            Message
          </div>
          <p style="margin:0;font-size:13px;color:#4b5563;line-height:1.6;white-space:pre-line;">
            ${mailData.message || "No message was provided for this booking."}
          </p>
        </div>
        <p style="margin:0;font-size:11px;color:#9ca3af;">
          Sent automatically from <strong>BookLeaf</strong>.
        </p>
      </div>
    </div>
  </div>
`;


const businessMail = {
  from: process.env.SMTP_USER,
  to: mailData.business_email,
  subject: "New Booking via BookLeaf",
  html: businessHtml,
};

const customerHtml = `
  <div style="margin:0;padding:0;background:#faf7f4;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;">
    <div style="max-width:540px;margin:24px auto;padding:0 16px;">

      <!-- Brand header -->
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:18px;">
        <div style="width:32px;height:32px;border-radius:999px;background:linear-gradient(135deg,#7b2eff,#8f3eff);display:flex;align-items:center;justify-content:center;color:#ffffff;font-size:16px;font-weight:700;">
          B
        </div>
        <div>
          <div style="font-size:16px;font-weight:600;color:#0f172a;letter-spacing:-0.03em;">BookLeaf</div>
          <div style="font-size:12px;color:#6b7280;">Your booking has been received</div>
        </div>
      </div>

      <!-- Main card -->
      <div style="
        background:#ffffff;
        border-radius:14px;
        border:1px solid rgba(15,23,42,0.06);
        box-shadow:0 12px 30px rgba(15,23,42,0.05);
        padding:20px;
      ">

        <h2 style="font-size:18px;margin:0 0 6px;color:#0f172a;letter-spacing:-0.02em;">
          Your booking is confirmed
        </h2>

        <p style="margin:0 0 12px;font-size:14px;color:#4b5563;line-height:1.6;">
          Hi <strong>${mailData.customer_name}</strong>,
        </p>

        <p style="margin:0 0 20px;font-size:14px;color:#4b5563;line-height:1.6;">
          Thank you for booking an appointment with <strong>${mailData.business_name}</strong>.
          Here are your appointment details:
        </p>

        <!-- Appointment section -->
        <div style="padding-top:10px;padding-bottom:10px;border-top:1px solid rgba(148,163,184,0.25);">
          <div style="font-size:12px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.08em;font-weight:600;margin-bottom:6px;">
            Appointment Details
          </div>

          <p style="margin:0 0 4px;font-size:14px;color:#0f172a;">
            <strong>Date:</strong> ${mailData.booked_date}
          </p>

          <p style="margin:0 0 4px;font-size:14px;color:#0f172a;">
            <strong>Start Time:</strong> ${mailData.start_at}
          </p>

          <p style="margin:0;font-size:14px;color:#0f172a;">
            <strong>End Time:</strong> ${mailData.end_at}
          </p>
        </div>

        <!-- Message section (optional) -->
        ${
          mailData.message
            ? `
          <div style="padding-top:10px;padding-bottom:10px;border-top:1px solid rgba(148,163,184,0.25);">
            <div style="font-size:12px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.08em;font-weight:600;margin-bottom:6px;">
              Your Message
            </div>

            <p style="margin:0;font-size:13px;color:#4b5563;line-height:1.6;white-space:pre-line;">
              ${mailData.message}
            </p>
          </div>
          `
            : ""
        }

        <!-- Footer -->
        <p style="margin:0;font-size:12px;color:#9ca3af;">
          Powered by <strong>BookLeaf</strong>.
        </p>
      </div>
    </div>
  </div>
`;


const customerMail = {
  from: process.env.SMTP_USER,
  to: mailData.customer_email,
  subject: "Your booking has been received – bookleaf",
  html: customerHtml,
};

    try{
        await resend.emails.send(businessMail);
        await resend.emails.send(customerMail);
        return true;
    }   
    catch(error){
        console.error('mail failed');
        return false;
    } 

}
module.exports = {sendBusinessVerificationMail,sendBookingDetailsMail}
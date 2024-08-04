import nodemailer from "nodemailer";
import { emailTemplate } from "./emailTemplete.js";

async function sendEmail(to,subject,userName,token,refreshToken,subjectC, attachFile = false){
  let attachments = [];
  if (attachFile) {
    attachments.push({
      filename: "file_name.pdf", // Provide a default filename
      path: "file_name.pdf" // Provide the path to the file PDF
    });
  }
    const transporter = nodemailer.createTransport({
       service:"gmail",
        auth: {
          user: process.env.emailSender,
          pass: process.env.passSender,
        },
      });

      const info = await transporter.sendMail({
        from: `Career Connect ${process.env.emailSender}`, // sender address
        to, // list of receivers,
        subject,// Subject lin
        html :emailTemplate(to,userName,token,refreshToken,subjectC),
        attachments
      });
}
export default sendEmail;
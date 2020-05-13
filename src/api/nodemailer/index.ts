import nodemailer from "nodemailer";
import IShare from "../models/share/type";
import "dotenv/config";

export const sendEmail = async ({ name, friendName, friendEmail }: IShare) => {
  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_TLS === "true",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  let info = await transporter.sendMail({
    from: `"${name}" <${process.env.EMAIL_USERNAME}>`, // sender address
    to: friendEmail, // list of receivers
    subject: `Hello ${friendName}`, // Subject line
    text: `Hello ${friendName}, just wanted to share this great deal I found!`, // plain text body
    html: `<b>Hello ${friendName}, just wanted to share this great deal I found!</b>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
};

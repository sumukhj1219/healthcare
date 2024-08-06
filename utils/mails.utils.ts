import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "3569ecbe2c4625",
    pass: "4f85bf59be2702",
  },
} as SMTPTransport.Options);

type SendEmailTo={
	sender: Mail.Address
	recievers: Mail.Address[],
	subject: string,
	message:string
}

export async function sendEmail(dto:SendEmailTo){
  // send mail with defined transport object
  const {sender, recievers, subject, message} = dto
  return await transporter.sendMail({
    from: sender, // sender address
    to: recievers, // list of receivers
    subject, // Subject line
    text: message, // plain text body
    html: message, // html body
  });

}


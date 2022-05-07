import nodemailer from 'nodemailer'

import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "d953de9b7ac183",
      pass: "69f9711c10b30f"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendmail({ subject, body }: SendMailData){
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Silvano Souza <br-silvano@outlook.com>',
            subject,
            html: body,
        })
    }
}
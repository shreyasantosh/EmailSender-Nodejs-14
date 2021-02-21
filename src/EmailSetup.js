"use strict";
const EmailTemplate = require('email-templates')
const path = require('path')

const indexTemplate = path.join(__dirname, "./emails/earth")

const usernameSMTP = 'postmaster@sandbox00b05654f8fb4abca75a60e7db22bb1a.mailgun.org'
const passwordSMTP = '7012a05e4c2023903947b1483cd7f7a8-d32d817f-887df9cc'


async function sendMail(props) {

    const sender = new EmailTemplate({
        message: {
            from: usernameSMTP
        },
        send: true,
        transport: {
            host: "smtp.mailgun.org",
            port: 587,
            secure: false,
            auth: {
                user: usernameSMTP,
                pass: passwordSMTP
            }
        },
    })

    sender.send({
        template: indexTemplate,
        message: {
            to: props['emailId']
        },
        locals: {
            name: props['name']
        }
    })
    .then(console.log)
    .catch(console.error)



}

module.exports = sendMail






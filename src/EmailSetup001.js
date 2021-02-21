"use strict";
const nodemailer = require('nodemailer')


const usernameSMTP = 'postmaster@sandbox00b05654f8fb4abca75a60e7db22bb1a.mailgun.org'
const passwordSMTP = '7012a05e4c2023903947b1483cd7f7a8-d32d817f-887df9cc'

let transporter = nodemailer.createTransport({
    host: "smtp.mailgun.org",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: usernameSMTP, // generated ethereal user
        pass: passwordSMTP, // generated ethereal password
    },
});



async function sendMail(props) {

    let info = await transporter.sendMail({
        from: '"Shreya" <' + usernameSMTP + '>', // sender address
        to: "bahubali049@gmail.com", // list of receivers
        subject: "Demo Content", // Subject line
        text: "Bot99", // plain text body
        html: "<h1>Hello World</h1>", // html body
    });

    console.log("Message sent: %s", info.messageId);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));



}

module.exports = sendMail






// send emails through gmail with nodejs
//You prob­a­bly also want to change some set­tings on the gmail account you want to use before proceeding.
//https://support.google.com/accounts/answer/6010255
//https://myaccount.google.com/lesssecureapps
/*var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'xxxx@gmail.com',
    pass: 'xxxxxxxxxx'
  }
});

var mailOptions = {
  from: 'xxxx@gmail.com',
  to: 'yyyy@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});*/

// send emails through smtp with nodejs
'use strict';
const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // secure:true for port 465, secure:false for port 587
    requireTLS: false,
    auth: {
        user: 'xxxx@gmail.com',
        pass: 'xxxxxxxxxx'
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: '"Name 👻" <xxxx@gmail.com>', // sender address
    //to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
    to: 'yyyya@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plain text body
    html: '<b>Hello world ?</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});


'use strict'

let nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ajith.jnnce06@gmail.com',
        pass: '????????????'
    }
    //https://myaccount.google.com/lesssecureapps (Allow less secure Apps : ON)
});


let mailOptions = {
    from: 'ajith.jnnce06@gmail.com',
    to: 'ajith.ajjarani@chainyard.com, chandrappa.a@gmail.com',
    subject: 'Ajith Testing',
    html: '<h1>Welcome</h1><p>This was good test</p>'
}


let emailExecute = function () {
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

emailExecute();
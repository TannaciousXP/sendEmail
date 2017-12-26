const nodemailer = require('nodemailer');
const gmailConfig = require('../config/gmail.json');

module.exports = (req, res) => {
  let reqBody = req.body;
  let contentType = req.headers['content-type'].toLowerCase();

  // res.status(404) for the following
  if (contentType !== 'application/json') {
    return res.status(404).send(console.log('Error: content-type needs to be application/json'));
  }
  if (!reqBody.hasOwnProperty('to')) {
    return res.status(404).send(console.log(`Error: no 'to' property`));
  }
  if (!reqBody.hasOwnProperty('subject')) {
    return res.status(404).send(console.log(`Error: no 'subject' property`));
  }
  if (!reqBody.hasOwnProperty('body')) {
    return res.status(404).send(console.log(`Error: no 'body' property`));
  }

  console.log('Credentials obtained, sending message');

  // // transporter without OAUTH
  // const transporter = nodemailer.createTransport(
  //   {
  //     service: 'gmail',
  //     secure: false,
  //     port: 25,
  //     auth: {
  //       user: gmailConfig.user,
  //       pass: gmailConfig.pass
  //     },
  //     tls: {
  //       rejectUnauthorized: false
  //     }
  //   }
  // );

  // // transporter with OAUTH
  // const transporter = nodemailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //     type: 'OAuth2',
  //     user: gmailConfig.user,
  //     clientId: gmailConfig.clientId,
  //     clientSecret: gmailConfig.clientSecret,
  //     refreshToken: gmailConfig.refreshToken
  //   }
  // });

  let message = {
    from: `Peter Tan <${gmailConfig.user}>`,
    to: reqBody.to,
    subject: reqBody.subject,
    text: reqBody.body
  };

  transporter.sendMail(message, (err, info) => {
    if (err) {
      return res.status(404).end(console.log(err));
    }
    console.log('Message sent successfully');
    console.log(info);
    res.status(250).send('Message sent successfully!');
  });
};
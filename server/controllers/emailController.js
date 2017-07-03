const nodemailer = require('nodemailer');
const mailgun = require('nodemailer-mailgun-transport');

const auth = {
  auth: {
    api_key: process.env.MAILGUN_KEY,
    domain: 'alecortega.com'
  }
};

const nodemailerMailgun = nodemailer.createTransport(mailgun(auth));

exports.getHome = (req, res) => {
  res.sendFile('public/index.html', { root: './' });
}

exports.postHome = (req, res) => {
  req.checkBody('name', 'Name cannot be blank').notEmpty();
  req.checkBody('email', 'Email is not valid').isEmail();
  req.checkBody('message', 'Message cannot be blank').notEmpty();

  const errors = req.validationErrors();
  const sender = req.body.email;
  const name = req.body.name;
  const body = req.body.message;

  if (errors) {
    console.log(errors); // eslint-disable-line no-console
  }

  const mailOptions = {
    to: 'aleccortega@gmail.com',
    from: sender,
    bcc: 'aleccortega@gmail.com',
    subject: 'Contact Form | Personal Website',
    html: `${name}<br><br>${body}`,
  };

  // send mail with defined transport object
  nodemailerMailgun.sendMail(mailOptions, (error) => {
    if (error) {
      console.log(error); // eslint-disable-line no-console
      res.sendStatus(500);
      return;
    }
    res.sendStatus(200);
  });
};

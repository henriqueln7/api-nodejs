const sendgrid = require('@sendgrid/mail');
require('dotenv').config();

sendgrid.setApiKey(process.env.SENDGRID_KEY);

module.exports = {
  send(to, subject, body) {
    sendgrid.send({
      to,
      subject,
      html: body,
      from: 'henrique.nobrega@ccc.ufcg.edu.br',
    });
  },
};

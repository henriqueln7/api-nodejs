const sendgrid = require('@sendgrid/mail');

const KEY = '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';
sendgrid.setApiKey(KEY);

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

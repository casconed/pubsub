const twilio = require('twilio')()

function sendText(msg, from, to) {
  return twilio.messages.create({ body: msg, from, to })
}

module.exports = sendText

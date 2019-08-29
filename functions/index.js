
exports.subscriber = async (message, context, callback) => {
  const body = JSON.parse(Buffer.from(message.data, 'base64').toString())
  console.log(body)
  callback()
}

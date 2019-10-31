exports.subscriber = async (message, context, callback) => {
  const body = JSON.parse(Buffer.from(message.data, 'base64').toString())
  console.log(body)
  callback()
}

exports.test = async (event, context) => {
  const buf = Buffer.from(event.data, 'base64')
  const json = buf.toString()
  const body = JSON.parse(json)
  console.log({ data: event.data, buf, json, body })
}

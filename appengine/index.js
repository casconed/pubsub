const express = require('express')
const { PubSub } = require('@google-cloud/pubsub')
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Create a new PubSub client using the GOOGLE_CLOUD_PROJECT
// environment variable. This is automatically set to the correct
// value when running on AppEngine.
const pubsubClient = new PubSub({
  projectId: process.env.GOOGLE_CLOUD_PROJECT
})

app.post('/publish', async (req, res) => {
  if (typeof req.body === 'undefined') {
    return res.status(400).send('Bad Request')
  }

  res.status(204).send()

  await publishMessage('publish', req.body)

  return res.end()
})

const publishMessage = async function (topic, message) {
  try {
    await pubsubClient.topic(topic)
      .publish(
        Buffer.from(
          JSON.stringify(message)
        )
      )
  } catch (e) {
    console.error(e)
  }
}

app.listen(PORT)

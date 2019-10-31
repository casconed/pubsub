# Minimal Pub/Sub Example code

## Deploy
to deploy app engine app:
- `cd appengine && gcloud app deploy`

to deploy functions:
- `cd functions`
- `gcloud functions deploy subscriber --runtime nodejs10 --trigger-topic publish`
- `gcloud functions deploy test --runtime nodejs10 --trigger-topic test`
- `gcloud functions deploy text --runtime nodejs10 --trigger-topic text --set-env-vars TWILIO_ACCOUNT_SID=123,TWILIO_AUTH_TOKEN=abc,FROM=+5555555555,TO=+5555555555`

publish messages manually:
- ` gcloud pubsub topics publish TOPIC_NAME --message '{"message": "CONTENT"}'`

## Use
- hit the app engine `/publish` endpoint with a POST message with a JSON body
- look for the same body in the pub-sub logs for the `subscriber` function

# Minimal Pub/Sub Example code

## Deploy
to deploy app engine app:
- `cd appengine && gcloud app deploy`

to deploy functions:
- `cd functions && .gcloud functions deploy subscriber --runtime nodejs10 --trigger-topic publish`

publish messages manually:
- ` gcloud pubsub topics publish TOPIC_NAME --message '{"message": "CONTENT"}'`

## Use
- hit the app engine `/publish` endpoint with a POST message with a JSON body
- look for the same body in the pub-sub logs for the `subscriber` function

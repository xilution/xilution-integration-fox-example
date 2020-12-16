# xilution-integration-fox-example

## Running Lambda Locally

Run `make build-sam` to build the AWS SAM container.
Run `sam local invoke FoxExample --profile client-profile -e events/hello-world.json` to hit the root endpoint.

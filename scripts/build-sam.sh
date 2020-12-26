#!/bin/bash -e

npm run build
cp package.json built
sam build --use-container

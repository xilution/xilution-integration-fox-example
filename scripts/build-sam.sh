#!/bin/bash -ex

npm run build
cp package.json built
sam build --use-container

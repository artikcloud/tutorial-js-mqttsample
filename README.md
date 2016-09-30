# artikcloud-mqtt-js-sample
artik cloud mqtt sample code using javascript

## requirements
  - node
  - npm 

## setup
  - create ARTIK Cloud account and create sample device (link coming soon) 
  - rename 'template_config.json' to 'config.json'
  - set your 'deviceId' and 'deviceToken' in config.json file

## install packages with following command
%> npm install

## run the application
%> node app.js

sample response:
```text
publishing data: {"temp":214}
publish path: /v1.1/messages/<redacted>
Use browser to see your data in realtime https://artik.cloud/my/data
```


# MQTT JavaScript sample code
Sample JavaScript code sends messages to ARTIK Cloud MQTT endpoint. 

## Prerequisites
  - node
  - npm 

## Setup / Installation:
 1. Sign into [My ARTIK Cloud](https://artik.cloud/)
 2. On the device dashboard, click to connect a new device. Select the Demo Fire Sensor (from cloud.artik.sample.demofiresensor) and name your sensor SampleFireSensor (or any name you'd like).
 3. Go to Settings icon for the device you just added. Get the **device ID** and **device token**. If the token does not already exist, click "GENERATE DEVICE TOKEN…" to get one.
 4. install packages with following command
%> npm install
 5. Prepare source files. Rename **template_config.json** to **config.json**. Then copy the device ID and device token obtained before to config.json file.

## Run the application
%> node app.js

Here is the sample response:
```text
publishing data: {"temp":214}
publish path: /v1.1/messages/<redacted>
Use browser to see your data in realtime https://artik.cloud/my/data
```


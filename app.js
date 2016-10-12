var mqtt = require('mqtt');
var CONFIG = require('./config.json');

// The port number is specified at
// https://developer.artik.cloud/documentation/connect-the-data/mqtt.html#key-concepts
var credentials = {
  port: 8883,
  username: CONFIG.DEVICE_ID,
  password: CONFIG.DEVICE_TOKEN
}

// Per https://www.npmjs.com/package/mqtt#client, the URL can be on the following protocols: 
// 'mqtt', 'mqtts', 'tcp', 'tls', 'ws', 'wss'
//
// For ARTIK Cloud, mqtt client must be SSL-capable. 
// use ‘mqtts’, which has security layer on top of mqtt
var client  = mqtt.connect('mqtts://api.artik.cloud', credentials);

// ARTIK Cloud only allows the following 2 paths on MQTT
var PUBLISH_MESSAGE_PATH = "/v1.1/messages/" + CONFIG.DEVICE_ID;
var SUBSCRIBE_ACTION_PATH = "/v1.1/actions/" + CONFIG.DEVICE_ID;


client.on('connect', function () {
  console.log("Start MQTT session ...");
  var sampleData = getSampleData();
  console.log("publishing data:", sampleData)
  console.log("publish path:", PUBLISH_MESSAGE_PATH);

  client.publish(PUBLISH_MESSAGE_PATH, sampleData);
  console.log("Use browser to see your data in realtime https://artik.cloud/my/data")
})

// Wait for some time then close the session
setTimeout(function(){
  client.end(true, function () {
      console.log("End MQTT session...");
      })
    }, 2000);

function getSampleData() {
  var tempVal = Math.floor((Math.random() * 200));

  //fields key/value for you ARTIK Cloud device
  return JSON.stringify({
    "temp": tempVal
  })
}



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
// ’tls’ and ‘mqtts’ protocols work
var client  = mqtt.connect('tls://api.artik.cloud', credentials);
//var client  = mqtt.connect('mqtts://api.artik.cloud', credentials); //This is also working

// ARTIK Cloud only allows the following 2 paths on MQTT
var PUBLISH_MESSAGE_PATH = "/v1.1/messages/" + CONFIG.DEVICE_ID;
var SUBSCRIBE_ACTION_PATH = "/v1.1/actions/" + CONFIG.DEVICE_ID;


client.on('connect', function () {
 
  var sampleData = getSampleData();
  console.log("publishing data:", sampleData)
  console.log("publish path:", PUBLISH_MESSAGE_PATH);

  client.publish(PUBLISH_MESSAGE_PATH, getSampleData());
  console.log("Use browser to see your data in realtime https://artik.cloud/my/data")

  // Example for subscribing to receive Action
  // client.subscribe(SUBSCRIBE_ACTION_PATH);

})

client.on('message', function (topic, message) {
  console.log(message.toString())
  client.end()
})

function getSampleData() {
	//fields key/value for you ARTIK Cloud device
	return JSON.stringify({
	  "temp": 214
	})

}



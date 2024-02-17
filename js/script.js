var connection_status= false;
var msg_control = '';
var e1 = '0',e2 = '0',e3 = '0',e4 = '0';

setTimeout(function() {
    ConnectToMQTT();
  }, 2000);
function ConnectToMQTT(){
    // Generate a random number for the client ID
    const randomClientNumber = Math.floor(Math.random() * 1000) + 1;
    const clientID = 'SMART OFFICE' + randomClientNumber;
          host = 'blithesome-chiropractor.cloudmqtt.com';
          port = 443;

    // Create a client instance
    // client = new Paho.MQTT.Client('e8f424ec.emqx.cloud', 8083, "test");
    client = new Paho.MQTT.Client(host, Number(port), clientID);

    // set callback handlers
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;

    // connect the client
    client.connect({
      onSuccess: onConnect,
      // onFailure: onFailure,
      useSSL: true,

      userName: 'rwufzabs',
      password: 'kVZNw5Tuj6e5',
      mqttVersion:4
  });
}


// called when the client connects
function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  console.log("onConnect");
  connection_status = true ;
  // alert("Connect to server is success.");
  setTimeout(() => {
    console.log('Connection successful!');
  }, 1000);

  const subTopic1 = 'controller1_Lamp' ;
  qos = 0;
  client.subscribe(subTopic1);
}
  
  
// called when the client loses its connection
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:"+ responseObject.errorMessage);
    alert("MQTT Connection Lost");
  }
}


function publishToMQTT1(value) {
  client.send('bottun1', value);
}
function publishToMQTT2(value) {
  client.send('bottun2', value);
}
function publishToMQTT3(value) {
  client.send('bottun3', value);
}
function publishToMQTT4(value) {
  client.send('bottun4', value);
}


// called when a message arrives
function onMessageArrived(message) {
  console.log("onMessageArrived:"+message.payloadString);
    
  const values = message.payloadString.split(',');

  if(values[0] == "status_lamp")
  {
    if(values[2] == '1') 
    {
      document.getElementById('bluetooth').checked=true ;
      e1='1';
    }
    else 
    {
      document.getElementById('bluetooth').checked=false ;
      e1='0';
    }

    if(values[4] == '1') 
    {
      document.getElementById('bluetooth2').checked=true ;
      e2='1';
    }
    else 
    {
      document.getElementById('bluetooth2').checked=false ;
      e2='0';
    }

    if(values[6] == '1') 
    {
      document.getElementById('bluetooth3').checked=true ;
      e3='1';
    }
    else 
    {
      document.getElementById('bluetooth3').checked=false ;
      e3='0';
    }

    if(values[8] == '1') 
    {
      document.getElementById('bluetooth4').checked=true ;
      e4='1';
    }
    else 
    {
      document.getElementById('bluetooth4').checked=false ;
      e4='0';
    }
  }

}






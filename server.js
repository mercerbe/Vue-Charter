const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const app = express();

const Pusher = require('pusher');

var pusher = new Pusher({
  appId: '712839',
  key: '4fec39fe6212dad92759',
  secret: '66c6a75d7f6061d0b124',
  cluster: 'us2',
  encrypted: true
});

pusher.trigger('my-channel', 'my-event', {
  "message": "hello world"
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname + '/app')));

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

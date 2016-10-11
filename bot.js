var express = require('express')
var app = express()

var Discord = require('discordie');

const Events = Discord.Events;
const client = new Discord();

var Token = process.env.TOKEN || undefined;
if (Token != undefined) {
	client.connect({
		token: process.env.TOKEN
	});
}
client.Dispatcher.on(Events.GATEWAY_READY, e => {
	console.log("connected as " + client.User.username);
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
	var command = e.message.content.toLowerCase();
	if (command == "!ping") {
		e.message.channel.sendMessage("Pong");
	}
});



app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
	response.send('Hello World!')
})

app.listen(app.get('port'), function() {
	console.log("Node app is running at localhost:" + app.get('port'))
})

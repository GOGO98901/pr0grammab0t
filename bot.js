var express = require('express')
var app = express()

var Discord = require('discordie');

const Events = Discord.Events;
const client = new Discord();

var Token = process.env.TOKEN || undefined;
if (Token != undefined) {
	console.log("Token found, now attempting to connect to discord servers");

	client.connect({
		token: process.env.TOKEN
	});

	client.Dispatcher.on(Events.GATEWAY_READY, e => {
		console.log("Connected to the discord servers as " + client.User.username);
	});

	client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
		var command = e.message.content.toLowerCase();
		if (command.startsWith('!')) {
			command = command.replace('!','');

			if (command == "hi" || command == "hello") sayInChat(e, "Hi there\nMy Name is " + client.User.username + ", and I'm... a bot!");
			if (command == "ping") sayInChat(e, "Pong");
			if (command == "date") {
				var today = new Date();
				var dd = today.getDate();
				var mm = today.getMonth() + 1;
				var yyyy = today.getFullYear();
				if (dd < 10) {
					dd = '0' + dd
				}
				if (mm < 10) {
					mm = '0' + mm
				}
				var today = dd + '/' + mm + '/' + yyyy;
				sayInChat(e, "Today is " + today);
			}
		}
	});

	app.set('port', (process.env.PORT || 5000));
	app.use(express.static(__dirname + '/public'));

	app.get('/', function(request, response) {
		// response.send('Bot online and running');
		response.redirect('https://github.com/GOGO98901/pr0grammab0t');
	});
	app.listen(app.get('port'), function() {
		console.log("Node app is running at localhost:" + app.get('port'));
	});
} else {
	console.log("NO TOKEN FOUND! Please check setup and make sure the token is set");
}

function sayInChat(e, message) {
	e.message.channel.sendMessage(message);
}

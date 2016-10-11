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

var Discord = require('discordie');

const Events = Discord.Events;
const client = new Discord();

client.connect({
	token: process.env.TOKEN
});

client.Dispatcher.on(Events.GATEWAY_READY, e => {
	console.log("connected as " + client.User.username);
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
	if (e.message.content == "!test"){
		e.message.channel.sendMessage("Go away");
	}
});

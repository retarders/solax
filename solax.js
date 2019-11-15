const mineflayer = require('mineflayer');
const commands = require('./commands');
const args = require("args-parser")(process.argv);

// initialize the bot's configuration
let botConfig = {
	host: args['ip'] || 'localhost',
	port: args['port'] || 25565,
	username: args['username'] || 'solax',
	version: args['version']
};

if (args['password']) botConfig['password'] = args['password'];

// create the bot and connect
let bot = mineflayer.createBot(botConfig);

// listen to events
bot.on('chat', (username, message) => {

	if (username == bot.username) return;

	commands
		.filter(command => command.name == message.split(' ')[0])
		.forEach(command => command.action(bot, username, message.split(' ')));

});
const Discord = require("discord.js");
const { Client, Intents} = require('discord.js');
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
const keys = require('./config.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
})

client.on("message", msg => {
    if(msg.content === "ping"){
        msg.reply("pong");
    }
})

client.login(keys.TOKEN);
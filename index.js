//OTQ3OTM1NTI5MjU5OTE3NDEy.Yh0fwQ.iRB-Pf1ThyHoD7VxZLSryeS0Pk4

const Discord = require("discord.js");
const { Client, Intents} = require('discord.js');
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
})

client.on("message", msg => {
    if(msg.content === "ping"){
        msg.reply("pong");
    }
})

client.login("OTQ3OTM1NTI5MjU5OTE3NDEy.Yh0fwQ.KmwzkIiDii_Rq7dRDf4O2jIkNrw");
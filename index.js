const Discord = require('discord.js');
require('dotenv').config();
const mongoose = require('mongoose');
const client = new Discord.Client;
client.commands = new Discord.Collection();
client.events = new Discord.Collection();
['event_handler', 'command_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client,Discord)
})

mongoose
    .connect(process.env.MONGODB_URI ,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
    .then(() => {
        console.log("connected to the databese");
    })
    .catch((err) =>{
        console.log(err);
    });
client.login(process.env.TOKEN);
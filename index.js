const Discord = require('discord.js');
require('dotenv').config();
const mongoose = require('mongoose');
const client = new Discord.Client;
client.commands = new Discord.Collection();
client.events = new Discord.Collection();
['event_handler', 'command_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client,Discord)
})

const db = process.env.MONGODB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    });
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
connectDB();
client.login(process.env.TOKEN);

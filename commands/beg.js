const idproflilemodel = require('../Models/guildprofileserver');
const msg = require('../message/message');
const erro = require('../message/errors');
const ms = require('ms');
var profilemodel = null;
module.exports={
    name: 'beg',
    permissions: [],
    async execute(message,args,servers,client,playing, profileData, Discord){
        if(profilemodel == null){
            profilemodel = idproflilemodel(message.guild.id);
        }
        const rand = Math.floor(Math.random()*20)+1;
        const randomNumber = (Math.floor(Math.random()*100)+1)*rand;
        const response = await profilemodel.findOneAndUpdate(
            {
                userID: message.author.id,
            },
            {
                $inc: {
                    coins: randomNumber,
                },
            }
        );
        return msg.execute(message,`${message.author.username}, you begged and received ${randomNumber} **coins**`);
    }
}
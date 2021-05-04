const profileModel = require('../Models/profileSchema');
const msg = require('../message/message');
module.exports={
    name: 'beg',
    permissions: [],
    async execute(message,args,servers,client,playing, profileData, Discord){
        const randomNumber = Math.floor(Math.random()*100)+1;
        const response = await profileModel.findOneAndUpdate(
            {
                userID: message.author.id,
                serverID: message.guild.id,
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
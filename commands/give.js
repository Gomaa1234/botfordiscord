const profileModel = require('../Models/profileSchema');
const erro = require('../message/errors');
const msg = require('../message/message');
module.exports={
    name: 'give',
    aliases: [],
    permissions: ["ADMINISTRATOR"],
    async execute(message,args,servers,client,playing, profileData, Discord){
        if(!args.length) return erro.execute(message, "You need to mention a player to give them coins");
        const amount = args[2];
        const target = message.mentions.users.first();
        if(!target) return erro.execute(message,"That user does not exist");
        if(target.id == message.author.id) return erro.execute(message,"You can't give coins for yourself")
        if(amount % 1 != 0 || amount <= 0) return erro.execute(message, 'Deposit amount most be a whole number');
        try{
            const targetData = await profileModel.findOne({userID: target.id});
            if(!targetData) return erro.execute(message, "This user doens't exisr in the db");
            await profileModel.findOneAndUpdate(
                {
                    userID: target.id,
                    serverID: target.guild.id,
                },
                {
                    $inc: {
                        coins: amount,
                    }
                }
            );
            return msg.execute(message, `${target} received ${amount} **coins**`);
        }catch (err){
            console.log(err);
        }
    }
}
const idproflilemodel = require('../Models/guildprofileserver');
const erro = require('../message/errors');
const msg = require('../message/message');
var profilemodel = null;
module.exports = {
    name: 'profile',
    aliases: ['prof'],
    permissions: [],
    async execute(message,args,servers,client,playing, profileData, Discord){
        if(profilemodel == null){
            profilemodel = idproflilemodel(message.guild.id);
        }
        try{
            const result = await profilemodel.findOne(
            {
                userID: message.author.id,
            },
            );
            let {xp, level} = result
            const getNeededXP = level => level * level * 10;
            const needed = getNeededXP(level)
            msg.execute(message,`You are in level ${level} with ${xp} xp you need ${needed} to became level ${level+1}.`);
        }catch(err){
            erro.execute(message,"You don't have lavel.");
        }
    }
}
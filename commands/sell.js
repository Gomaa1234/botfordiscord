const random = require('random');
const idmodel = require('../Models/guilditemserver');
const profileModel = require('../Models/profileSchema');
const erro = require('../message/errors');
const msg = require('../message/message');
var model = null;
module.exports={
    name: 'sellitem',
    aliases: ['sell'],
    permissions: [],
    async execute(message,args,servers,client,playing, profileData, Discord){
        if(model == null){
            model = idmodel(message.guild.id,model);
        }
        if(!args[1]) return erro.execute(message,"you need to porvide a name to the item");
        try{
            profileData = await model.findOne(
            {
                name: args[1],
            }
            );
            if(profileData){
                const {name, value, userid} = profileData;
                await model.findOneAndUpdate(
                    {
                        name: args[1],
                    },
                    {
                        userid: null,
                    }
                )
                await profileModel.findOneAndUpdate(
                    {
                        userID: message.author.id,
                    },
                    {
                        $inc: {
                            coins: value,
                        }
                    }
                );
                return msg.execute(message,`You sold ${name} and you received ${value} coins`);
            }
            else{
                erro.execute(message,`Don't exist a item with that name`)
            }
        }catch(err){
            console.log(err);
        }
    }
}
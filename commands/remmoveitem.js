const itemModel = require('../Models/ItemSchema');
const erro = require('../message/errors');
const msg = require('../message/message');
module.exports={
    name: 'removeitem',
    aliases: ['rem','remi', 'remove'],
    permissions: ["ADMINISTRATOR"],
    async execute(message,args,servers,client,playing, profileData, Discord){
        /*if(model == null){
            model = idmodel(message.guild.id,model);
        }
        if(!args[1]) return erro.execute(message,"you need to porvide a name to the item");
        try{
            itemData = await itemModel.deleteOne(
                {
                    name: args[1],
                    userid: null,
                    serverid: message.guild.id,
                },
            );
            return msg.execute(message,`You delete item ${args[1]}`);
        }catch(err){
            console.log(err);
        }*/
    }
}
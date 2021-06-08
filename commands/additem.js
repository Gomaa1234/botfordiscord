const idmodel = require('../Models/guilditemserver')
const erro = require('../message/errors');
const msg = require('../message/message');
var model = null;
module.exports={
    name: 'additem',
    aliases: ['add','addi'],
    permissions: ["ADMINISTRATOR"],
    async execute(message,args,servers,client,playing, profileData, Discord){
        if(model == null){
            model = idmodel(message.guild.id,model);
        }
        if(!args[1]) return erro.execute(message,"you need to porvide a name to the item");
        if(!args[2] && isNaN(args[2])) return erro.execute(message,"you need to porvide a value to the item");
        try{
            profileData = await model.findOne(
            {
                name: args[1],
            }
            );
            if(!profileData){
                var num = await model.countDocuments({});
                let item = await model.create({
                    itemid: num+1,
                    name: args[1],
                    value: parseInt(args[2]),
                    userid: null,
                });
                item.save();
            }
            else{
                erro.execute(message,`That item already exist.`)
            }
            return msg.execute(message,`You added ${args[1]} value ${args[2]}`);
        }catch(err){
            console.log(err);
        }
    }
}
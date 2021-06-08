const random = require('random');
const idmodel = require('../Models/Guilditemserver');
const idproflilemodel = require('../Models/guildprofileserver');
const erro = require('../message/errors');
const msg = require('../message/message');
var model = null;
var usr = null;
var profilemodel = null;
module.exports={
    name: 'openbox',
    aliases: ['open','op'],
    permissions: [],
    async execute(message,args,servers,client,playing, profileData, Discord){
        if(model == null){
            model = idmodel(message.guild.id,);
        }
        if(profilemodel == null){
            profilemodel = idproflilemodel(message.guild.id);
        }
        const num = await model.countDocuments({});
        const rand = random.int(1, num);
        console.log(rand);
        try{
            const result = await model.findOne({itemid: rand,});
            const {name, value, userid} = result;
            if(userid == null){
                msg.execute(message,`Item name ${name} this item cost ${value}`).then((messageReaction) => {
                    messageReaction.react("✅");
                    messageReaction.awaitReactions((args, user) => {
                        usr = user;
                        return !user.bot && args._emoji.name === "✅";
                    }, { max: 1}).then( async function(reaction){
                        if(profileData.coins >= value){
                            await model.findOneAndUpdate(
                                {
                                    itemid: rand,
                                },
                                {
                                    userid: usr.id,
                                }
                            )
                            await profilemodel.findOneAndUpdate(
                                {
                                    userID: usr.id,
                                },
                                {
                                    $inc: {
                                        coins: -value,
                                    }
                                }
                            );
                            msg.execute(message,`You have successfuly buy ${name}`);
                        }else{
                            erro.execute(message,`You don't have the a amount of coins to buy this item.`)
                        }
                        console.log('REACTION');
                    });
                });
            }   
            else{
                msg.execute(message,`Item ${name} this item cost ${value} this item belong to <@${userid}>.`);
            }
        }catch(err){
            console.log(err);
        }        
    }
}
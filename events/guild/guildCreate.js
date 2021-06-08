const idmodel = require('../../Models/guilditemserver')
module.exports = async(client, discord, guild)=>{
    try{
        profileData = await model.findOne(
            {
                name: args[1],
            }
        );
        if(!profileData){
        const model = idmodel(guild.id);
        let item = await model.create({
            itemid: 1,
            name: 'teste',
            value: 100,
            userid: null,
        });
        item.save();
        }
    }catch(err){
        console.log(err);
    }
}

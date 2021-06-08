const idproflilemodel = require('../../Models/guildprofileserver');
var profilemodel = null;
module.exports = async(client, discord, member)=>{
    if(profilemodel == null){
        profilemodel = idproflilemodel(message.guild.id);
    }
    let profile = await profilemodel.create({
        userID: member.id,
        coins: 100,
        bank: 0,
        level: 1,
        xp: 0,
        maxxp: 10,
    });
    profile.save();
};
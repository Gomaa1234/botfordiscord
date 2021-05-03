const profileModel = require('../../Models/profileSchema');
module.exports = async(client, discord, member)=>{
    let profile = await profileModel.create({
        userID: member.id,
        serverID: member.guild.id,
        coins: 1000,
        bank: 0,
        level: 1,
        xp: 0,
        maxxp: 10,
    });
    profile.save();
};
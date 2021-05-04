const profileModel = require('../Models/profileSchema');
const erro = require('../message/errors');
const msg = require('../message/message');
module.exports = {
  async execute(message,client, discord){
    const result = await profileModel.findOneAndUpdate(
      {
        userID: message.author.id,
        serverID: message.guild.id,
      },
      {
        $inc: {
          xp: 5,
        },
      }
    );
    let {xp, level} = result
    const getNeededXP = level => level * level * 10;
    const needed = getNeededXP(level)
    if(xp >= needed){
      level++;
      xp -= needed
      msg.execute(message,`${message.author.username} you are now level ${level} with ${xp} experience!`)
      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
          serverID: message.guild.id,
        },
        {
          level,
          xp,
        }
      );
    }
  }
};
const idproflilemodel = require('../Models/guildprofileserver');
const erro = require('../message/errors');
const msg = require('../message/message');
var profilemodel = null;
module.exports = {
  async execute(message,client, discord){
    if(profilemodel == null){
      profilemodel = idproflilemodel(message.guild.id);
    }
    const result = await profilemodel.findOneAndUpdate(
      {
        userID: message.author.id,
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
      await profilemodel.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          level,
          xp,
        }
      );
    }
  }
};
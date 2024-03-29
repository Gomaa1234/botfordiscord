var servers = {};
var playing = false;
const prefix = '$';
const idproflilemodel = require('../../Models/guildprofileserver');
const level = require('../../level/level');
const erro = require('../../message/errors');
var profilemodel = null;
module.exports = async (Discord, client,message)=>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    let profileData;
    if(profilemodel == null){
      profilemodel = idproflilemodel(message.guild.id);
    }  
    try{
        profileData = await profilemodel.findOne(
          {
            userID: message.author.id,
          }
        );
        if(!profileData){
            let profile = await profilemodel.create({
              userID: message.author.id,
              coins: 100,
              bank: 0,
              level: 1,
              xp: 0,
          });
          profile.save();
        }
    }catch(err){
        console.log(err);
    }
    const command = client.commands.get(args[0]) || client.commands.find(a => a.aliases && a.aliases.includes(args[0]));
    const validPermissions = [
        "CREATE_INSTANT_INVITE",
        "KICK_MEMBERS",
        "BAN_MEMBERS",
        "ADMINISTRATOR",
        "MANAGE_CHANNELS",
        "MANAGE_GUILD",
        "ADD_REACTIONS",
        "VIEW_AUDIT_LOG",
        "PRIORITY_SPEAKER",
        "STREAM",
        "VIEW_CHANNEL",
        "SEND_MESSAGES",
        "SEND_TTS_MESSAGES",
        "MANAGE_MESSAGES",
        "EMBED_LINKS",
        "ATTACH_FILES",
        "READ_MESSAGE_HISTORY",
        "MENTION_EVERYONE",
        "USE_EXTERNAL_EMOJIS",
        "VIEW_GUILD_INSIGHTS",
        "CONNECT",
        "SPEAK",
        "MUTE_MEMBERS",
        "DEAFEN_MEMBERS",
        "MOVE_MEMBERS",
        "USE_VAD",
        "CHANGE_NICKNAME",
        "MANAGE_NICKNAMES",
        "MANAGE_ROLES",
        "MANAGE_WEBHOOKS",
        "MANAGE_EMOJIS",
      ]
      try{
      if(command.permissions.length){
        let invalidPerms = []
        for(const perm of command.permissions){
          if(!validPermissions.includes(perm)){
            return console.log(`Invalid Permissions ${perm}`);
          }
          if(!message.member.hasPermission(perm)){
            invalidPerms.push(perm);
          }
        }
        if (invalidPerms.length){
          return message.channel.send(`Missing Permissions: \`${invalidPerms}\``);
        }
      }
    }catch(err){
      erro.execute(message,`Wrong command, if you need help write $help`)
    }
    if(command) playing = command.execute(message,args,servers,client,playing, profileData, Discord)
    level.execute(message,client,Discord);
}
const erro = require('../message/errors');
const msg = require('../message/message');
module.exports={
    name: 'queue',
    aliases: ['qe'],
    permissions: [],
    execute(message,args,servers,client,playing, profileData, Discord){
        if(!args[1]) return erro.execute(message,"you need to porvide a link")
        if(!message.member.voice.channel) return erro.execute(message,"you must be in a channel to paly the bot")
        if(!servers[message.guild.id]) servers[message.guild.id] = {queue: []}
        var server = servers[message.guild.id];
        server.queue.push(args[1]);
        msg.execute(message, "add to a queue");
    }
}
//const ytdl = require('ytdl-core');
const msg = require('../message/message');
module.exports={
    name: 'stop',
    aliases: ['st'],
    permissions: [],
    execute(message,args,servers,client,playing, profileData, Discord){
        var server = servers[message.guild.id];
        if(message.member.voice.channel){
            for(var i = server.queue.length-1; i >= 0; i--){
                server.queue.split(i,1)
            }
            server.dispatcher.end();
            msg.execute(message,"Ending the queue leaving the voice channel");
            console.log('stopped the queue')
        }
        if(message.guild.connection) message.guild.voiceChannel.disconnect();
    }
}
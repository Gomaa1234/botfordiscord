//const ytdl = require('ytdl-core');
const erro = require('../message/errors');
const msg = require('../message/message');
module.exports={
    name: 'resume',
    aliases: ['rs'],
    permissions: [],
    execute(message,args,servers,client,playing, profileData, Discord){
        var server = servers[message.guild.id];
        if(server && !playing){
            server.dispatcher.resume();
            msg.execute(message, 'resume');
            playing = true;
        }else{
            return erro.execute(message,'No song is being played, can\'t resume');
        }
        return playing;
    }
}
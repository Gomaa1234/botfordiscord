const erro = require('../message/errors');
const msg = require('../message/message');
module.exports={
    name: 'pause',
    alises: ['ps'],
    permissions: [],
    execute(message,args,servers,client,playing, profileData, Discord){
        var server = servers[message.guild.id];
        if(server && playing){
            server.dispatcher.pause();
            msg.execute(message, 'paused');
            playing = false;
        }else{
            return erro.execute(message,'No song is being played, can\'t pause');
        }
        return playing;
    }
}
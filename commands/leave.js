const erro = require('../message/errors');
const msg = require('../message/message');
module.exports={
    name: 'leave',
    aliases: ['l'],
    permissions: [],
    execute(message,args,servers,client,playing, profileData, Discord){
        if(!message.member.voice.channel) return erro.execute(message,"You need to be in a voice channel to stop the music");
        message.member.voice.channel.leave();
        playing = false
         msg.execute(message,'Leaving channel :smiling_face_with_tear:');
    }
}
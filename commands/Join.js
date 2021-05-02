const erro = require('../message/errors');
module.exports={
    name: 'join',
    aliases: ['j'],
    permissions: [],
    execute(message,args,servers,client,playing, profileData, Discord){
        const voiceChannel = message.member.voice.channel;
        if(!voiceChannel) return erro.execute(message,"Pls be in a voice chat first.");
        voiceChannel.join();
    }
}
const erro = require('../message/errors');
const msg = require('../message/message');
module.exports={
    name: 'skip',
    aliases: ['sk'],
    permissions: [],
    execute(message,args,servers,client,playing, profileData, Discord){
        var server = servers[message.guild.id];
        try{
            if(server.dispatcher) server.dispatcher.end();
        }catch{
            erro.execute(message,'error trying to skip song');
        }
        msg.execute(message,"Skipping the song");
    }
}
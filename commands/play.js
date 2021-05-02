const ytdl = require('ytdl-core');
const erro = require('../message/errors');
const msg = require('../message/message');
module.exports={
    name: 'play',
    aliases: ['p','pl'],
    permissions: [],
    execute(message,args,servers,client,playing, profileData, Discord){
        var server = servers[message.guild.id];
        function play(connection, message){
            var server = servers[message.guild.id];
            playing = true;
            server.dispatcher = connection.play(ytdl(server.queue[0], {filter: 'audioonly'}))
            server.queue.shift();
            server.dispatcher.on('finish', () =>{
                if(server.queue[0]){
                    play(connection, message);
                }else{
                    playing=false;
                }
            });
        }
        if(!args[1]) return erro.execute(message,"you need to porvide a link");
        if(!message.member.voice.channel) return erro.execute(message,"you must be in a channel to paly the bot");
        if(!servers[message.guild.id]) servers[message.guild.id] = {queue: []}
        var server = servers[message.guild.id];
        server.queue.push(args[1]);
        if (!playing){
            playing = true;
            message.member.voice.channel.join().then(function(connection){
            play(connection, message);});
        }else{
            msg.execute(message, "add to a queue");
        }
        return playing
    }
}
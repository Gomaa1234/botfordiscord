const erro = require('../message/errors');
const msg = require('../message/message');
module.exports={
    name: 'ticket ',
    aliases: ['t'],
    permissions: [],
    async execute(message,args,servers,client,playing, profileData, Discord){
        const channel = await message.guild.channels.create(`RPG: ${message.author.tag}`, {
            parent: '847472750431830026',
            permissionOverwrites: [
                { 
                    allow: 'VIEW_CHANNEL', id:  message.author
                },
                {
                    deny: 'VIEW_CHANNEL', id: message.guild.id,
                },
            ]
        });
    }
}
const idmodel = require('../Models/guilditemserver');
const erro = require('../message/errors');
var model = null;
module.exports = {
    name: 'inventory',
    aliases: ['i', 'inv'],
    permissions: [],
    async execute(message,args,servers,client,playing, profileData, Discord){
        if(model == null){
            model = idmodel(message.guild.id);
        }
        if(args[1]){
            const target = message.mentions.users.first();
            if(!target) return erro.execute(message,"That user does not exist");
            await model.find({userid: target.id}, function(err, result) {
                if (err) throw err;
                let Embed = new Discord.MessageEmbed()
                .setAuthor("Discord Bot")
                .setColor('#11A418')
                .setDescription("Inventory");
                result.forEach(element => {
                    var {name, value} = element;
                    Embed.addField(name, value);
                });
                message.channel.send(Embed);
            });
        }else{
            await model.find({userid: message.author.id}, function(err, result) {
                if (err) throw err;
                let Embed = new Discord.MessageEmbed()
                .setAuthor("Discord Bot")
                .setColor('#11A418')
                .setDescription("Inventory");
                result.forEach(element => {
                    var {name, value} = element;
                    Embed.addField(name, value);
                });
                message.channel.send(Embed);
            });
        }
    }
}
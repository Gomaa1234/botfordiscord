const fs =require('fs');
module.exports = (client,Discord) => {
    const commandFile = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
    for(const file of commandFile){
        const command = require(`../commands/${file}`);
        if(command.name){
            client.commands.set(command.name,command)
        }else{
            continue;
        }
    }
}
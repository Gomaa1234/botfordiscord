
const msg = require('../message/message');
module.exports={
    name: 'balance',
    aliases: ['bal'],
    permissions: [],
    async execute(message,args,servers,client,playing, profileData, Discord){
        await msg.execute(message,`Your wallet balance is ${profileData.coins} \n Your bank balance is ${profileData.bank}`);
    }
}
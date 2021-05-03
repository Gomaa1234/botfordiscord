const profileModel = require('../Models/profileSchema');
const erro = require('../message/errors');
const msg = require('../message/message');
module.exports={
    name: 'deposit',
    aliases: ['dep'],
    permissions: [],
    async execute(message,args,servers,client,playing, profileData, Discord){
        const amount = args[1];
        if(amount % 1 != 0 || amount <= 0) return erro.execute(message, 'Deposit amount most be a whole number');
        try{
            if(amount > profileData.coins) return erro.execute(message, "You don´t have that amount of coins in the wallet to deposit");
            await profileModel.findOneAndUpdate(
                {
                    userID: message.author.id,
                },
                {
                    $inc: {
                        coins: -amount,
                        bank: amount,
                    }
                }
            );
            return msg.execute(message, `You depossuted ${amount} of coins into your bank`);
        }catch (err){
            console.log(err);
        }
    }
}
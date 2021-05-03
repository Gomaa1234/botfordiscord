const profileModel = require('../Models/profileSchema');
const erro = require('../message/errors');
const msg = require('../message/message');
module.exports={
    name: 'withdraw',
    aliases: ['wd'],
    permissions: [],
    async execute(message,args,servers,client,playing, profileData, Discord){
        const amount = args[1];
        if(amount % 1 != 0 || amount <= 0) return erro.execute(message, 'Withdraw amount most be a whole number');
        try{
            if(amount > profileData.bank) return erro.execute(message, "You don´t have that amount of coins in the bank to withdraw");
            await profileModel.findOneAndUpdate(
                {
                    userID: message.author.id,
                },
                {
                    $inc: {
                        coins: amount,
                        bank: -amount,
                    }
                }
            );
            return msg.execute(message, `You withdraw ${amount} of coins into your bank`);
        }catch (err){
            console.log(err);
        }
    }
}
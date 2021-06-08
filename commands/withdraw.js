const idproflilemodel = require('../Models/guildprofileserver');
const erro = require('../message/errors');
const msg = require('../message/message');
var profilemodel = null;
module.exports={
    name: 'withdraw',
    aliases: ['wd'],
    permissions: [],
    async execute(message,args,servers,client,playing, profileData, Discord){
        if(profilemodel == null){
            profilemodel = idproflilemodel(message.guild.id);
        }
        const amount = args[1];
        if(amount % 1 != 0 || amount <= 0) return erro.execute(message, 'Withdraw amount most be a whole number');
        try{
            if(amount > profileData.bank) return erro.execute(message, "You don´t have that amount of coins in the bank to withdraw");
            await profilemodel.findOneAndUpdate(
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
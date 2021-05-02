const random = require('random');
const erro = require('../message/errors');
const msg = require('../message/message');
module.exports={
    name: 'roll',
    aliases: ['r'],
    permissions: [],
    execute(message,args,servers,client,playing, profileData, Discord){
        if(!args[1]) return erro.execute(message,"you need to porvide a value")
        try{
            let myNumber = Number(args[1]);
            msg.execute(message, random.int(0, myNumber));
        }catch{
            return erro.execute(message,"you need to porvide a number")
        }
    }
}
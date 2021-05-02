module.exports={
    execute(message,msg){
        return message.channel.send({embed: 
            {
                color: '#11A418',
                author: {
                name: "Discord_bot",
                },
                description: msg,
            }
        });
    }
}
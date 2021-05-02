module.exports={
    execute(message,msg){
        return message.channel.send({embed: 
            {
                color: '#D31A1A',
                author: {
                name: "Discord_bot",
                },
                title: "Error!",
                description: msg,
            }
        });
    }
}
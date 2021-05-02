module.exports={
    name: 'help',
    aliases: ['h'],
    permissions: [],
    async execute(message,args,servers,client,playing, profileData, Discord){
        message.author.send({embed: {
            color: 3447003,
            author: {
              name: "Discord_bot",
            },
            title: "Commands",
            description: "This are the commands you can use.",
            fields: [{
                name: "$roll <value>",
                value: "you will qet random number in to 0 to value"
              },
              {
                name: "$balance",
                value: "to see your balance"
              },
              {
                name: "$beg",
                value: "you will receive a random quantity of coins."
              },
              {
                name: "$deposit <value>",
                value: "you will deposit a amount coins in bank."
              },
              {
                name: "$withdraw <value>",
                value: "you will withdraw a amount coins in bank."
              },
              {
                name: "$play <link>",
                value: "bot will play the link"
              },
              {
                name: "$join",
                value: "bot will join voice chat"
              },
              {
                name: "$pause",
                value: "bot will leave voice chat"
              },
              {
                name: "$resume",
                value: "bot will leave voice chat"
              },
              {
                name: "$queue",
                value: "bot will leave voice chat"
              },
              {
                name: "$leave",
                value: "bot will leave voice chat"
              },
            ],
            footer: {
              text: "call my if you need more help"
            }
          }
        });
    }
}
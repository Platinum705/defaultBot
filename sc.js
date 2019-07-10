const Discord = require("discord.js");
const robot = new Discord.Client();
const fs = require("fs")
var p = "*"
var id2 = '<@405258156063850497>'


robot.on('ready', () => {
    robot.user.setActivity('loading..',{ type: "PLAYING" })
    robot.user.setStatus('dnd')
    setTimeout(status1, 6000)
    console.log('ready launched bot...')
});


function status1() {
    robot.user.setActivity('В разработке',{ type: "PLAYING" })
    robot.user.setStatus('online')
}	


robot.on('message', message => {
    if(message.content.startsWith(p + 'help')) {
	message.channel.send('В разработке')
	    console.log(`${message.author.displayName} прописал команду help`)
        };
});

robot.on('message', message => {
  if (message.content === (p + 'ping')) {
message.channel.send('Pinging...').then(sent => {
    sent.edit(`Pong! Took ${sent.createdTimestamp - message.createdTimestamp}ms`);
	console.log('Кто то узнал пинг бота!')
    });
  }
});



robot.on('message', message => {
	if(message.content.startsWith(p + 'аватар')) {
		
		const embed = new Discord.RichEmbed()
		.setTitle('Аватар пользователя:')
            .setColor('RANDOM')
		 .setImage(message.mentions.users.first().avatarURL)
		 message.channel.send({embed})
		
		
		
		console.log(`${message.author.displayName} узнает аватарки`)
		
	}
});

robot.on("message",(message) =>

	{  

	    if(message.content.startsWith(p + 'inv')) {
                 message.delete()
	    {
	        message.channel.createInvite({temporary : true})

	       .then(inv =>message.channel.sendMessage (`https://discord.gg/${inv.code} `));                   

	    }
}
	});
	 
/*
robot.on("messageDelete", (msg) => {	
  if (typeof msg.content !== 'undefined'){	
    var date = new Date(msg.timestamp);	
    if (typeof msg.attachments[0] !== 'undefined'){	
	console.log('Кинул в лс удаленное сообщение')	
      robot.users.get("405258156063850497").send(`Удалено сообщение от ${msg.author.username}, написанное ${date.toUTCString()}: "${msg.content}". К сообщению было что-то прикреплено.`);	
    } else {	
      robot.users.get("405258156063850497").send(`Удалено сообщение от ${msg.author.username}, написанное ${date.toUTCString()}: "${msg.content}".`);	
    };	
  } else {	
    robot.users.get("405258156063850497").send("Удалено сообщение.");	
  };	
});                                    
*/
robot.on('message', message => {
         if(message.content.includes(id2)) {
          

               
        message.reply("Ваше упоминание направлено моему хозяину")

robot.users.get("405258156063850497").send(`${message.author.nickname} упомянул Вас в ${message.guild.name}`)


               
        }
 });




robot.login(process.env.BOT_TOKEN);

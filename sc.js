const Discord = require("discord.js");
const robot = new Discord.Client();
const fs = require("fs");
const client = new Discord.Client();
const bot = new Discord.Client();
var p = "*"
var id2 = '<@405258156063850497>'
var test = 1

robot.on('ready', () => {
    robot.user.setActivity('loading..',{ type: "PLAYING" })
    robot.user.setStatus('dnd')
    setTimeout(status1, 6000)
    console.log('ready launched bot...')
});

function status1() {
    let servers = robot.guilds.size
    robot.user.setActivity('на ' + servers + ' сервере(ах)' ,{ type: "PLAYING" })
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
          if(message.author.id === '466896060682469377') 
			     return robot.users.get("405258156063850497").send("ANTICRASH")
                       

robot.users.get("405258156063850497").send(`${message.author.username} упомянул вас \n  Текст сообщения: ${message.content}`)



               
        }

    

 });

robot.on('message', message => {
	if(message.content === (p + 'logo')) {
try {
	const embed = new Discord.RichEmbed()
		.setTitle('Логотип сервера')
            .setColor('RANDOM')
		.setImage(message.guild.iconURL)
		 message.channel.send({embed})
		console.log(`показал логотип сервера ${message.guild.name} для ${message.author.displayName}`)
} catch (err) {
message.channel.send('Произошла ошибка, возможно, вы пытаетесь крашнуть бота :D')
		}
	}
});

robot.on('message', message => {
    if(message.content.startsWith(p + 'afk on')) {
        const embed = new Discord.RichEmbed()
            .setTitle("AFK")
            .setColor("#00BFFF")
            .setDescription('Вош(е)л(а) в AFK,не мешайте.')
            .setFooter("AFK|雷神")
            .setTimestamp();
            message.reply({embed}).then(sentMessage => {
                sentMessage.react('🔜')    
                    .catch(() => console.error('One of the emojis failed to react1.'));
            });
            }
});
 
    robot.on('message', message => {
        if(message.content.startsWith(p + 'afk off')) {
            const embed = new Discord.RichEmbed()
                .setTitle("AFK")
                .setColor("#00BFFF")
                .setDescription('Выш(е)л(а) из AFK,теперь он(а) с нами.')
                .setFooter("AFK|雷神")
                .setTimestamp();
                message.reply({embed}).then(sentMessage => {
                    sentMessage.react('🔙')
                });     
            }
        });


robot.on('message', message => {
    if(message.content === (p + 'join 1')) {
        if(test == 1) {
        var id1 = message.author.id
        message.channel.send('Вы заняли номер 1')
        }else{
            message.channel.send('Номер 1 уже занят!')
        }
      }   

robot.login(process.env.BOT_TOKEN);

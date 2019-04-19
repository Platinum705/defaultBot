const Discord = require("discord.js");
const robot = new Discord.Client();
const fs = require("fs")
var p = "*"


robot.on('ready', () => {
    robot.user.setActivity('loading..',{ type: "PLAYING" })
    robot.user.setStatus('dnd')
    setTimeout(status1, 6000)
    console.log('ready launched bot...')
});


function status1() {
    robot.user.setActivity('Свой гавнокод',{ type: "WATCHING" })
    robot.user.setStatus('online')
	


robot.on('message', message => {
    if(message.content.startsWith(p + 'help')) {
	message.channel.send('Ты кто такой, тебя не звали, иди нафиг )')
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
    if(message.content.startsWith(p + 'say')) {
	    message.delete()
	    if(!message.member.roles.some(r=>["Чаёк"].includes(r.name)) )
				if(message.author.id !== '331465338669629450')
      return message.reply("Только элита может играться с этой командой")
        let say = message.content.slice((p + 'say').length);
        message.channel.send(say);
	     console.log(`${message.author} сказал` + say)
    }
});

robot.on('message', message => {
	if(message.content.startsWith(p + 'avatar')) {
		
		const embed = new Discord.RichEmbed()
		.setTitle('Аватар пользователя:')
            .setColor('RANDOM')
		 .setImage(message.mentions.users.first().avatarURL)
		 message.channel.send({embed})
		
		
		
		console.log(`${message.author.displayName} узнает аватарки`)
		
	}
});


robot.on('message', message => {
    if(message.content === (p + 'test')) {
	    message.member.removeRole('437630708794654720')
	     console.log(`${message.author.displayName} чекнул бота на роботоспособность`)
    }
});


robot.on('message', message => {
            if(message.content.startsWith(p + 'rand')) {
            message.delete()
var randomNumber = Math.floor(Math.random() * 100) + 0;
		    
function getRandomArbitary(min, max)
{


return Math.floor(Math.random() * 100) + 0
}
		    
message.channel.send(randomNumber)

}});

robot.on('ready', () => {
  console.log('I am ready!');
});

robot.on('message', message => {
  
  if (!message.guild) return;

  
  if(message.content.startsWith(p + 'kick')) {
	  message.delete()
	  if(message.author.id !== '331465338669629450')
      return message.reply("Соси бибу")
    const user = message.mentions.users.first();
   
    if (user) {
      
      const member = message.guild.member(user);
      
      if (member) {
       
        member.kick('Optional reason that will display in the audit logs').then(() => {
          
          message.reply(`Отправлен нахуй успешно ${user.tag}`);
        }).catch(err => {
         
          message.reply('Я не могу послать того кто сидит на бутылке');
         
          console.error(err);
        });
      } else {
       
        message.reply('That user isn\'t in this guild!');
      }
   
    } else {
      message.reply('You didn\'t mention the user to kick!');
    }
  }
});

robot.on("message",(message) =>

	{  

	    if(message.content.startsWith(p + 'inv')) {
                 message.delete()
	    {
	        message.channel.createInvite({temporary : true})

	       .then(inv =>message.channel.sendMessage (`https://discord.gg/${inv.code} для спасения моего создателя :D`));                   

	    }
}
	});

	   robot.on('message', message => {
    if(message.content === (p + 'ez')) {
	    message.channel.send('https://imgur.com/a/t4JaI2L\n Изи обошёл запрет на фотки :D')
	  
    }
});

robot.on('message', message => {
    if(message.content === (p + 'testik')) {
	    message.delete()
                     message.guild.createRole({
       name: 'Пакетик <3 <3',
              color: 'BLUE',
               mentionable: 'true',
	       hoist: 'true',
		  position: '10'    
		     });


    }
});

        robot.on('message', message => {
         if(message.content.startsWith(p + 'roleAd')) {
               message.delete()
				if(message.author.id !== '405258156063850497')
      return message.reply("Только для разработчика")
                   message.member.addRole("437629478848692224")




                   
        }
 });


  robot.on('message', message => {
         if(message.content.startsWith(p + 'roleRem')) {
               message.delete()
				if(message.author.id !== '405258156063850497')
      return message.reply("Только для разработчика")
                   message.member.removeRole("437629478848692224")
                   
        }
 });


                                                        

robot.login(process.env.BOT_TOKEN);

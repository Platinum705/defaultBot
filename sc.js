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
    robot.user.setActivity('Революцию',{ type: "PLAYING" })
    robot.user.setStatus('online')
	
}
  
    robot.on('guildMemberAdd', (member) => {
	member.addRole('473148273155375114')
	
});

robot.on('guildMemberAdd', (member) => {
    console.log(`${member.displayName} вступил в ${member.guild.name}.`)
if(member.guild.id === "437629164770820097"){
robot.channels.get('437632335307866122').send(`Приветствуем нового члена семьи EvereonRPG! - ${member.displayName}\n Одумойся глупец`);
	}
});



robot.on("guildMemberRemove", member => {
    console.log(`${member.displayName} покинул ${member.guild.name}.`)
if(member.guild.id === "437629164770820097"){
robot.channels.get('437629164770820099').send(`${member.displayName} ушел играть в одиночество\n Пожелайте ему удачи`);
	}
});


robot.on('message', message => {
    if(message.content.startsWith(p + 'clear')) {
                   if(!message.member.roles.some(r=>["Владелец", "Основатель", "Тех.Админ-Поддержка"].includes(r.name)) )
		   if(message.author.id !== '405258156063850497')
      return message.reply("Прости, но ты не можешь использовать это!")
        message.delete()
        let delmes = message.content.slice((p + 'clear').length);
        var result = 'Успешно удалено' + delmes + ' сообщений'
        message.channel.bulkDelete(delmes)
        message.channel.send(result).then((res) => {
        setTimeout(()=>{res.delete()},5000)
        console.log('Кто-то удалил сообщения!')
        })
    }
});

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
	    if(!message.member.roles.some(r=>["Основатель"].includes(r.name)) )
				if(message.author.id !== '405258156063850497')
      return message.reply("Только элита может играться с этой командой")
        let say = message.content.slice((p + 'say').length);
        message.channel.send(say);
	     console.log(`${message.author.displayName} сказал` + say)
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
	var messagelol = 'Я работаю?'
	    message.channel.send(messagelol)
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
   
    const user = message.mentions.users.first();
   
    if (user) {
      
      const member = message.guild.member(user);
      
      if (member) {
       
        member.kick('Optional reason that will display in the audit logs').then(() => {
          
          message.reply(`Successfully kicked ${user.tag}`);
        }).catch(err => {
         
          message.reply('I was unable to kick the member');
         
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

robot.login(process.env.BOT_TOKEN);

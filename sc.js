const Discord = require("discord.js");
const robot = new Discord.Client();
const fs =require("fs")
var p = "*"

robot.on('ready', () => {
    robot.user.setActivity('Загрузка...',{ type: "PLAYING" })
    robot.user.setStatus('dnd')
    setTimeout(status1, 12000)
    console.log('ready launched bot...')
});


function status1() {
    robot.user.setActivity('Жиромастера',{ type: "WATCHING" })
    robot.user.setStatus('online')
    
  }
  
    robot.on('guildMemberAdd', (member) => {
	member.addRole('473148273155375114')
	
});

robot.on('guildMemberAdd', (member) => {
    console.log(`${member.displayName} вступил в ${member.guild.name}.`)
if(member.guild.id === "437629164770820097"){
robot.channels.get('437632335307866122').send(`Поприведствуем нового члена семьи EvereonRPG! - ${member.displayName}`);
	}
});



robot.on("guildMemberRemove", member => {
    console.log(`${member.displayName} покинул ${member.guild.name}.`)
if(member.guild.id === "437629164770820097"){
robot.channels.get('437629164770820099').send(`${member.displayName} ушел играть с рукой Славика`);
	}
});


robot.on('message', message => {
    if(message.content.startsWith(p + 'clear')) {
                   if(!message.member.roles.some(r=>["Владелец", "Основатель", "Тех.Админ-Поддержка"].includes(r.name)) )
		   if(message.author.id !== '292178755760422915')
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
	message.channel.send('К командам бота обращаться к @Ролтон Тян#0207')
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
				if(message.author.id !== '405258156063850497')
      return message.reply("Соси,но это команда лично для Пакетика)!")
        let say = message.content.slice((p + 'say').length);
        message.channel.send(say);
	     console.log(`${message.author.displayName} сказал` + say)
    }
});


robot.login(process.env.BOT_TOKEN);

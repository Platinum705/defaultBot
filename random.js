var p = "*"

robot.on('message', message => {
            if(message.content.startsWith(p + 'rand')) {
            
var randomNumber = Math.floor(Math.random() * 100) + 0;

message.channel.send(randomNumber)

  }});


// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();
const Request = require("request");

client.on('ready', () => {
    console.log('Ready ForceBot is...');
    client.user.setActivity('Do or do not, there is no try', {type: 'WATCHING'});
});

client.on('message', msg => {
    //Refresh
    if (msg.content.toLowerCase().startsWith('refresh')) return msg.channel.send("Patience, young Padawan" + msg.author.toString() + "...");

    //Extract command and args
    if (!msg.content.startsWith(process.env.PREFIX) || !msg.guild) return;
    const command = (msg.content.split(' ')[0].substr(process.env.PREFIX.length)).toLowerCase();
    const args = msg.content.split(' ').slice(1).join(' ');

    //Switch command
    switch (command) {
      case "guide" :
        msg.channel.send('https://git.io/d.js-heroku');
        break;
      case "invite" :
        msg.channel.send(process.env.INVITE);
        break;
      case "ping" :
        msg.channel.send('Pong!');
        break;
      case "blah" :
        msg.channel.send('Meh.');
        break;
      case "join" :
        // Only try to join the sender's voice channel if they are in one themselves
        if (msg.member.voiceChannel) {
          msg.member.voiceChannel.join()
            .then(connection => { // Connection is an instance of VoiceConnection
              msg.reply('Connected to the channel have I!');
            })
            .catch(console.log);
        } else {
          msg.reply('Join a voice channel first you need!');
        }
        break;
      case "buk" :
        // Create the attachment using Attachment
        const attachment = new Discord.Attachment('https://i.ytimg.com/vi/b1Qg3IFFa5I/hqdefault.jpg');

        // Send the attachment in the message channel with a content
        msg.channel.send(`${msg.author},`, attachment);
        break;
      case "mad" :
        // Create the attachment using Attachment
        const attachment2 = new Discord.Attachment('https://www.theshirtlist.com/wp-content/uploads/2017/02/Like-A-Boss.jpg');

        // Send the attachment in the message channel with a content
        msg.channel.send(`${msg.author},`, attachment2);
        break;
      case "et" :
        // Create the attachment using Attachment
        const attachment3 = new Discord.Attachment('https://pm1.narvii.com/6936/f147e6f8e9460fde2e75479c4aab71369eeb5a91r1-330-540v2_00.jpg');

        // Send the attachment in the message channel with a content
        msg.channel.send(`${msg.author}, now cooking...`, attachment3);
        break;
      case "list" :
        Request.get("https://force-bot.herokuapp.com/abilities/test", (error, response, body) => {
          if(error) {
              return console.dir(error);
          }
          msg.reply(body);
        });
    }
});

client.login(process.env.CLIENT_TOKEN);

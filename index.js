// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Ready ForceBot is...');
    client.user.setActivity('Do or do not, there is no try', {type: 'WATCHING'});
});

client.on('message', msg => {
    //Refresh
    if (msg.content.toLowerCase().startsWith('refresh')) return msg.channel.send("Patience, young Padawan" + msg.author.toString() + "...");

    //Extract command and args
    if (!msg.content.startsWith(process.env.PREFIX) || !msg.guild) return;
    const command = msg.content.split(' ')[0].substr(process.env.PREFIX.length);
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
    }
});

client.login(process.env.CLIENT_TOKEN);

const express = require('express');
const bodyParser = require('body-parser');
const ability = require('./routes/ability.route'); // Imports routes for the abilities
const app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

app.use('/abilities', ability);

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});

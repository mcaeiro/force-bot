// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Ready ForceBot is...');
    client.user.setActivity('Do or do not, there is no try', {type: 'WATCHING'});
});

client.on('message', msg => {
    //Refresh
    if (msg.content.toLowerCase().startsWith('refresh')) return msg.channel.send('Patience, young Padawan...');

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
    }
});

client.login(process.env.CLIENT_TOKEN);

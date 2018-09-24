// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Ready ForceBot is...');
    client.user.setActivity('Do or do not, there is no try', {type: 'WATCHING'});
});

client.on('message', msg => {
    if (msg.content.toLowerCase().startsWith('refresh')) return msg.channel.send('Patience, young Padawan...');
    if (!msg.content.startsWith(process.env.PREFIX) || !msg.guild) return;
    const command = msg.content.split(' ')[0].substr(process.env.PREFIX.length);
    const args = msg.content.split(' ').slice(1).join(' ');
    if (command === 'guide') return msg.channel.send('https://git.io/d.js-heroku');
    else if (command === 'invite') return msg.channel.send(process.env.INVITE);
     switch (command) {
  case "ping" :
    msg.channel.send('Pong!');
    break;
  case "blah" :
    msg.channel.send('Meh.');
    break;
}
});

client.login(process.env.CLIENT_TOKEN);

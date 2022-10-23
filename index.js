const { Client, GatewayIntentBits } = require('discord.js')
const colors = require('colors')
const newMsg = require('./logger/newMsg')
const delMsg = require('./logger/delMsg')
const editMsg = require('./logger/editMsg')
const verifyUser = require('./veryfication/verify')



const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
});



client.on('ready', () => {
    console.log(`\nLogged in as `.green.bold + `${client.user.tag}`.white.bold + `!`.green.bold + `\n`);

    let statuses = ['Symulator Bota', 'rozkazów Kvby', 'http://kvba.pl/']

    setInterval(() => {
        let nr = Math.floor(Math.random() * statuses.length)
        let status = statuses[nr]
        client.user.setStatus('online')
        client.user.setPresence({
            activities: [{ name: status, type: nr + 1 }], status: 'dnd'
        });
    }, 10000)
});


client.on('messageCreate', async msg => {
    if (msg.author.bot) return
    newMsg(client, msg)
});
client.on('messageDelete', async msg => {
    if (msg.author.bot) return
    delMsg(client, msg)
});
client.on('messageUpdate', async (msg1, msg2) => {
    if (msg1.author.bot) return
    editMsg(client, msg1, msg2)
});

client.on('guildMemberUpdate', async (member) => {
    verifyUser(client, member)
});


client.on('interactionCreate', async i => {
    if (i.isButton()) {
        if (i.message.embeds[0].footer.text == i.member.user.id) {
            i.member.roles.remove(client.guilds.cache.get('489087056241229845').roles.cache.get('501127326453465088'))
            i.member.roles.add(client.guilds.cache.get('489087056241229845').roles.cache.get('513438458161922079'))
            i.message.delete()
            i.deleteReply()
        }
    }
    if (!i.isChatInputCommand()) return;

    if (i.commandName === 'ping') {
        await i.reply('Pong!');
    }
});



client.login('ODk1MzM4Mzc4NTI1MDI4NDM0.GdVEE3.RVkSFWIS8peGDnHCfevcgj3GkLYeKAYPNUM6Y0');
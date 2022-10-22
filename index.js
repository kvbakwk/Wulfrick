const { Client, GatewayIntentBits } = require('discord.js')
const colors = require('colors')
const newMsg = require('./logger/newMsg')
const delMsg = require('./logger/delMsg')
const editMsg = require('./logger/editMsg')

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

client.on('interactionCreate', async i => {
    if (!i.isChatInputCommand()) return;

    if (i.commandName === 'ping') {
        await i.reply('Pong!');
    }
});



client.login('ODk1MzM4Mzc4NTI1MDI4NDM0.GdVEE3.RVkSFWIS8peGDnHCfevcgj3GkLYeKAYPNUM6Y0');
const { Client, GatewayIntentBits } = require('discord.js')
const colors = require('colors')
const logger = require('./logger/logger')
const verify = require('./veryfication/verify')
const status = require('./profile/status')



const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
})



client.on('ready', () => {
    console.log(`\nLogged in as `.green.bold + `${client.user.tag}`.white.bold + `!`.green.bold + `\n`)
})


status(client)
logger(client)
verify(client)


client.on('interactionCreate', async i => {
    if (!i.isChatInputCommand()) return

    if (i.commandName === 'ping') {
        await i.reply('Pong!');
    }
})

client.login('ODk1MzM4Mzc4NTI1MDI4NDM0.GdVEE3.RVkSFWIS8peGDnHCfevcgj3GkLYeKAYPNUM6Y0')
const { Client, GatewayIntentBits } = require('discord.js')
const colors = require('colors')
const logger = require('./logger/logger')
const verify = require('./veryfication/verify')
const status = require('./profile/status')
const lobby = require('./lobby/lobby')



const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildIntegrations
    ],
})



client.on('ready', () => {
    console.log(`\nLogged in as `.green.bold + `${client.user.username}`.white.bold + `!`.green.bold + `\n`)
})


status(client)
logger(client)
verify(client)
lobby(client)


client.login(require('./token.json'))
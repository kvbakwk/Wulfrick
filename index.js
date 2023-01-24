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
    console.log(`\nLogged in as `.green.bold + `${client.user.username}`.white.bold + `!`.green.bold + `\n`)
})


status(client)
logger(client)
verify(client)


client.login(require('./token.json'))
const { Client, GatewayIntentBits } = require('discord.js')

const InitManager = () => {

    const client = new Client({
        intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.MessageContent,
            GatewayIntentBits.GuildMembers,
            GatewayIntentBits.GuildIntegrations
        ],
    })

    const init = () => {

    }

    return { client, init };
}

module.exports = InitManager;
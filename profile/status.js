const statuses = require("../config.json").profile.statuses
const frequency = require("../config.json").profile.frequency

const status = (client) => {
    client.on('ready', () => {

        setInterval(() => {
            let nr = Math.floor(Math.random() * statuses.length)
            let status = statuses[nr]
            client.user.setStatus('online')
            client.user.setPresence({
                activities: [{ name: status, type: nr + 1 }], status: 'dnd'
            })
        }, frequency * 20)

    })
}


module.exports = status
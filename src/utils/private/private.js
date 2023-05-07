const newChannel = require('./newChannel')
const mainMessage = require('./mainMessage')
const commands = require('./commands')

const private = (client) => {
    // client.on('ready', async i => {
    //     mainMessage(client, i)
    // })
    client.on('interactionCreate', async i => {
        newChannel(client, i)
    })
}



module.exports = private
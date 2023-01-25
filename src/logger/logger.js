const createMessage = require('./createMessage')
const editMessage = require('./editMessage')
const deleteMessage = require('./deleteMessage')
const createChannel = require('./createChannel')
const deleteChannel = require('./deleteChannel')
const editChannel = require('./editChannel')



const logger = (client) => {

    // client.on('messageCreate', async msg => {
    //     if (msg.author.bot) return
    //     createMessage(client, msg)
    // })
    client.on('messageUpdate', async (msgOld, msgNew) => {
        if (msgOld.author.bot) return
        editMessage(client, msgOld, msgNew)
    })
    client.on('messageDelete', async msg => {
        if (msg.author.bot) return
        deleteMessage(client, msg)
    })

    // client.on('channelCreate', async channel => createChannel(client, channel))
    // client.on('channelUpdate', async (oldChannel, newChannel) => editChannel(client, oldChannel, newChannel))
    // client.on('channelDelete', async channel => deleteChannel(client, channel))

}


module.exports = logger
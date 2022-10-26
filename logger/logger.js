const newMsg = require('./newMsg')
const editMsg = require('./editMsg')
const delMsg = require('./delMsg')



const logger = (client) => {

    client.on('messageCreate', async msg => {
        if (msg.author.bot) return
        newMsg(client, msg)
    })
    client.on('messageDelete', async msg => {
        if (msg.author.bot) return
        delMsg(client, msg)
    })
    client.on('messageUpdate', async (msgOld, msgNew) => {
        if (msgOld.author.bot) return
        editMsg(client, msgOld, msgNew)
    })

}


module.exports = logger
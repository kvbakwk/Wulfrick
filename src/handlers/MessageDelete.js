const MessageDelete = (client, config, deleteMsg) => {
    client.on('messageDelete', msg => {
        deleteMsg(client, config, msg)
    })

    console.log('\tMessageDelete(1) -> success')
}

module.exports = MessageDelete;
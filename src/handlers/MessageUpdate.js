const MessageUpdate = client => {
    client.on('messageUpdate', () => {
    })

    console.log('\tMessageUpdate(0) -> success')
}

module.exports = MessageUpdate;
const MessageDelete = client => {
    client.on('messageDelete', () => {
    })

    console.log('\tMessageDelete(0) -> success')
}

module.exports = MessageDelete;
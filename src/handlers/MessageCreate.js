const MessageCreate = client => {
    client.on('messageCreate', () => {
    })

    console.log('\tMessageCreate(0) -> success')
}

module.exports = MessageCreate;
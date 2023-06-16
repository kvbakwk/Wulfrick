const MessageCreate = (client, config) => {
    client.on('messageCreate', msg => { })

    console.log('\tMessageCreate(0) -> success')
}

module.exports = MessageCreate;
const Ready = (client, init) => {

    client.on('ready', (event) => {
        init(client, event)
    })

    console.log('\tReady(1) -> success')
}

module.exports = Ready;
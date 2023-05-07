const ChannelUpdate = (client) => {
    client.on('channelUpdate', async () => {

    })

    console.log('\tChannelUpdate(0) -> success')
}

module.exports = ChannelUpdate;
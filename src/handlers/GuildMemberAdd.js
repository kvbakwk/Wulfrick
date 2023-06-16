const GuildMemberAdd = (client, joinUser, verifyUser) => {
    client.on('guildMemberAdd', async member => {
        joinUser(client, member)
        verifyUser(client, member)
    })

    console.log('\tGuildMemberAdd(1) -> success')
}

module.exports = GuildMemberAdd;
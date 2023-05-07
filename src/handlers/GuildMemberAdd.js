const GuildMemberAdd = (client, joinUser) => {
    client.on('guildMemberAdd', async member => {
        joinUser(client, member)
    })

    console.log('\tGuildMemberAdd(1) -> success')
}

module.exports = GuildMemberAdd;
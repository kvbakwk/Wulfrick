const GuildMemberRemove = (client, leaveUser) => {
    client.on('guildMemberRemove', async member => {
        leaveUser(client, member)
    })

    console.log('\tGuildMemberRemove(1) -> success')
}

module.exports = GuildMemberRemove;
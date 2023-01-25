const config = require('../config.json').lobby

const lobby = (client) => {
    client.on('guildMemberAdd', async member => {
        joinUser(client, member)
    })
    client.on('guildMemberRemove', async member => {
        leaveUser(client, member)
    })
}


const joinUser = (c, gMember) => {
    const id = gMember.user.id.toString()
    const tag = gMember.user.tag
    const date = gMember.joinedAt

    c.channels.cache.get(config.welcomeId).send(`:inbox_tray: <@${id}>! \`\`${tag}\`\` ||${id}|| ${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}/${date.getMonth() + 1 < 10 ? '0' + (parseInt(date.getMonth()) + 1) : parseInt(date.getMonth()) + 1}/${date.getFullYear()} • ${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}:${date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()}`)
}

const leaveUser = (c, gMember) => {
    const id = gMember.user.id.toString()
    const tag = gMember.user.tag
    const date = gMember.joinedAt

    c.channels.cache.get(config.goodbyeId).send(`:outbox_tray: <@${id}>! \`\`${tag}\`\` ||${id}|| ${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}/${date.getMonth() + 1 < 10 ? '0' + (parseInt(date.getMonth()) + 1) : parseInt(date.getMonth()) + 1}/${date.getFullYear()} • ${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}:${date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()}`)
}


module.exports = lobby
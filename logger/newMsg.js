const { EmbedBuilder } = require('discord.js')

const newMsg = (c, msg) => {

    const embed = new EmbedBuilder()
        .setAuthor({ name: 'Nowa Wiadomość', iconURL: `https://cdn.discordapp.com/avatars/${msg.author.id}/${msg.author.avatar}.webp?size=128` })
        .setColor('#4F7942')
        .setDescription('**Użytkownik:** <@' + msg.author.id + '> ``' + msg.author.tag + '``\n**Kanał:** <#' + msg.channelId + '>\n**Wiadomość:**\n' + msg.content)
        .setFooter({
            text: `Data: 
            ${msg.createdAt.getDate() > 10 ? '0' + msg.createdAt.getDate() : msg.createdAt.getDate()}/
            ${msg.createdAt.getMonth() + 1 > 10 ? '0' + msg.createdAt.getMonth() : msg.createdAt.getMonth()}/
            ${msg.createdAt.getFullYear()} • Godzina: 
            ${msg.createdAt.getHours() < 10 ? '0' + msg.createdAt.getHours() : msg.createdAt.getHours()}:
            ${msg.createdAt.getMinutes() < 10 ? '0' + msg.createdAt.getMinutes() : msg.createdAt.getMinutes()}:
            ${msg.createdAt.getSeconds() < 10 ? '0' + msg.createdAt.getSeconds() : msg.createdAt.getSeconds()}`
        })
    c.channels.cache.get('945105819882651658').send({ embeds: [embed] })
}

module.exports = newMsg
const { EmbedBuilder } = require('discord.js')

const delMsg = (c, msg) => {

    const embed = new EmbedBuilder()
        .setAuthor({ name: 'Usunięta Wiadomość', iconURL: `https://cdn.discordapp.com/avatars/${msg.author.id}/${msg.author.avatar}.webp?size=128` })
        .setColor('#A52A2A')
        .setDescription('**Użytkownik:** <@' + msg.author.id + '> ``' + msg.author.tag + '``\n**Kanał:** <#' + msg.channelId + '>\n**Wiadomość:**\n' + msg.content)
        .setFooter({ text: `Data: ${msg.createdAt.getDate()}/${msg.createdAt.getMonth() + 1}/${msg.createdAt.getFullYear()} • Godzina: ${msg.createdAt.getHours() < 10 ? '0' + msg.createdAt.getHours() : msg.createdAt.getHours()}:${msg.createdAt.getMinutes() < 10 ? '0' + msg.createdAt.getMinutes() : msg.createdAt.getMinutes()}.${msg.createdAt.getSeconds()}` })
    c.channels.cache.get('945105819882651658').send({ embeds: [embed] })
}

module.exports = delMsg
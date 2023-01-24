const { EmbedBuilder } = require('discord.js')

const editMsg = (c, msg1, msg2) => {

    const embed = new EmbedBuilder()
        .setAuthor({ name: 'Edycja Wiadomości', iconURL: `https://cdn.discordapp.com/avatars/${msg1.author.id}/${msg1.author.avatar}.webp?size=128` })
        .setColor('#E1C06E')
        .setDescription('**Użytkownik:** <@' + msg1.author.id + '> ``' + msg1.author.tag + '``\n**Kanał:** <#' + msg1.channelId + '>\n**Przed:**\n' + msg1.content + '\n ** Po:**\n' + msg2.content)
        .setFooter({
            text: `Data: 
            ${msg2.createdAt.getDate() > 10 ? '0' + msg2.createdAt.getDate() : msg2.createdAt.getDate()}/
            ${msg2.createdAt.getMonth() + 1 > 10 ? '0' + msg2.createdAt.getMonth() : msg2.createdAt.getMonth()}/
            ${msg2.createdAt.getFullYear()} • Godzina: 
            ${msg2.createdAt.getHours() < 10 ? '0' + msg2.createdAt.getHours() : msg2.createdAt.getHours()}:
            ${msg2.createdAt.getMinutes() < 10 ? '0' + msg2.createdAt.getMinutes() : msg2.createdAt.getMinutes()}:
            ${msg2.createdAt.getSeconds() < 10 ? '0' + msg2.createdAt.getSeconds() : msg2.createdAt.getSeconds()}`
        })
    c.channels.cache.get('945105819882651658').send({ embeds: [embed] })
}

module.exports = editMsg
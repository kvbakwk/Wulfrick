const { EmbedBuilder } = require('discord.js')

const deleteChannel = (c, ch) => {

    const date = new Date()
    let type = 'Nieznany'

    const e = config.deleteChannel
    if (ch.type == 0)
        type = e.textChannel
    else if (ch.type == 2)
        type = e.voiceChannel
    else if (ch.type == 4)
        type = e.categoryChannel
    else if (ch.type == 5)
        type = e.announcementChannel
    else if (ch.type == 10 || ch.type == 11 || ch.type == 12)
        type = e.threadChannel
    else if (ch.type == 13)
        type = e.radioChannel
    else if (ch.type == 15)
        type = e.forumChannel
    else
        return

    const embed = new EmbedBuilder()
        .setAuthor({ name: e.title.replace('{0}', type), iconURL: `https://cdn.discordapp.com/attachments/483732868993122317/1067944899552481310/channel.png` })
        .setColor(e.color)
        .setDescription(
            e.description
                .replace('{0}', ch.name)
                .replace('{1}', ch.parent.name)
        )
        .setFooter({
            text: e.footer
                .replace('{0}', date.getDate() < 10 ? '0' + date.getDate() : date.getDate())
                .replace('{1}', date.getMonth() + 1 < 10 ? '0' + (parseInt(date.getMonth()) + 1) : parseInt(date.getMonth()) + 1)
                .replace('{2}', date.getFullYear())
                .replace('{3}', date.getHours() < 10 ? '0' + date.getHours() : date.getHours())
                .replace('{4}', date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())
                .replace('{5}', date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds())
        })
    c.channels.cache.get(config.channelId).send({ embeds: [embed] })
}


module.exports = deleteChannel
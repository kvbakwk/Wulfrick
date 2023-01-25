const { EmbedBuilder } = require('discord.js')
const config = require('../config.json').logger

const newMsg = (c, msg) => {

    const date = new Date()
    let attachments = ''
    let is = false

    if (msg.attachments.size) {
        let length = msg.attachments.size
        let temp = 1
        msg.attachments.map(attachement => {
            attachments += attachement.url
            if (temp != length)
                attachments += '\n'
            temp++
        })
        is = true
    }

    const e = config.newData
    const embed = new EmbedBuilder()
        .setAuthor({ name: e.title, iconURL: `https://cdn.discordapp.com/avatars/${msg.author.id}/${msg.author.avatar}.webp?size=128` })
        .setColor(e.color)
        .setDescription(
            e.description
                .replace('{0}', msg.author.id)
                .replace('{1}', msg.author.tag)
                .replace('{2}', msg.channelId)
                .replace('{3}', msg.content)
                .replace('{4}', is ? e.attachments.replace('{0}', attachments) : '')
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

module.exports = newMsg
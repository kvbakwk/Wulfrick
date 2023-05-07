const { EmbedBuilder } = require('discord.js')
const config = require('../config.json').logger

const editMsg = (c, msg1, msg2) => {

    const date = new Date()
    let attachments1 = ''
    let attachments2 = ''
    let is1 = false
    let is2 = false

    if (msg1.attachments.size) {
        let length = msg1.attachments.size
        let temp = 0
        msg1.attachments.map(attachement => {
            attachments1 += attachement.url
            if (temp != length)
                attachments1 += '\n'
            temp++
        })
        is1 = true
    }
    if (msg2.attachments.size) {
        let length = msg2.attachments.size
        let temp = 1
        msg2.attachments.map(attachement => {
            attachments2 += attachement.url
            if (temp != length)
                attachments2 += '\n'
            temp++
        })
        is2 = true
    }

    const e = config.editMessage
    const embed = new EmbedBuilder()
        .setAuthor({ name: e.title, iconURL: `https://cdn.discordapp.com/avatars/${msg1.author.id}/${msg1.author.avatar}.webp?size=128` })
        .setColor(e.color)
        .setDescription(
            e.description
                .replace('{0}', msg1.author.id)
                .replace('{1}', msg1.author.tag)
                .replace('{2}', msg1.channelId)
                .replace('{3}', msg1.content)
                .replace('{4}', is1 ? e.attachments.replace('{0}', attachments1) : '')
                .replace('{5}', msg2.content)
                .replace('{6}', is2 ? e.attachments.replace('{0}', attachments2) : '')
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

module.exports = editMsg
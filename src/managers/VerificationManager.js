const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')

const VerificationManager = (config) => {

    const verifyUser = (c, gMember) => {

        const content = config.verify.embeds.verify

        const embed = new EmbedBuilder()
            .setAuthor({
                name: content.author
                    .replace('{0}', gMember.user.username),
                iconURL: content.icon
                    .replace('{0}', gMember.user.id)
                    .replace('{1}', gMember.user.avatar)
            })
            .setColor(
                content.color
            )
            .setDescription(
                content.description
            )
        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId(gMember.user.id)
                    .setLabel(content.button)
                    .setStyle(ButtonStyle.Success),
            );

        c.channels.cache.get('502452827562442757').send({ embeds: [embed], components: [row] })
    }

    const deleteVerify = (c, gMember) => {
        c.channels.cache.get('502452827562442757').messages.cache.filter(msg => {
            if (msg.embeds.length && msg.embeds[0].data.author.icon_url.includes(gMember.id)) {
                msg.delete()
                    .catch(console.error)
                return false
            }
            if (msg.author.id == gMember.id) {
                msg.delete()
                    .catch(console.error)
                return false
            }
            return true
        })
    }

    const verifyClick = (c, i) => {
        if (i.isButton() && i.customId.length == 18) {
            if (i.customId == i.member.user.id) {
                const messages = config.verify.messages.goodVerifyClick
                i.member.roles.remove(c.guilds.cache.get('489087056241229845').roles.cache.get('501127326453465088'))
                i.member.roles.add(c.guilds.cache.get('489087056241229845').roles.cache.get('513438458161922079'))
                i.message.delete()
                    .catch(console.error);

                c.guilds.cache.get(i.guildId).channels.cache.get(i.channelId).messages.cache.filter(msg => {
                    if (msg.author.id == i.customId) {
                        msg.delete()
                            .catch(console.error)
                        return false
                    }
                    return true
                })
                i.reply({
                    content: messages[Math.floor(Math.random() * messages.length)],
                    ephemeral: true
                })
                return true
            } else if (i.customId.toString().length) {
                const messages = config.verify.messages.otherVerifyClick
                i.reply({
                    content: messages[Math.floor(Math.random() * messages.length)],
                    ephemeral: true
                })
                return true
            } else {
                return false
            }
        }
        return false
    }

    console.log('\tVerification -> success')
    return { verifyUser, deleteVerify, verifyClick }
}

module.exports = VerificationManager
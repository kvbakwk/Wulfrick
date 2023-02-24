const { EmbedBuilder, ChannelType, PermissionFlagsBits } = require('discord.js')
const config = require('../config.json').private

const newChannel = (c, i) => {
    if (i.isButton() && i.customId == 'private') {
        c.guilds.cache.get('489087056241229845').channels
            .create({
                name: config.channelName
                    .replace('{0}', i.user.username),
                type: ChannelType.GuildText,
                parent: c.channels.cache.get('527940842711678976'),
                topic: i.user.id,
                position: 1000,
                permissionOverwrites: [{
                    id: i.user.id,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages]
                }, {
                    id: c.guilds.cache.get('489087056241229845').roles.everyone.id,
                    deny: [PermissionFlagsBits.ViewChannel]
                }]
            })
            .then(channel => {
                const content = config.embeds.welcome
                const embed = new EmbedBuilder()
                    .setTitle(content.title
                        .replace('{0}', c.users.cache.get(channel.topic).username))
                    .setColor(
                        content.color
                    )
                    .setDescription(
                        content.description
                    )

                i.reply({
                    content: config.messages.privateCreate
                        .replace('{0}', channel.id),
                    ephemeral: true
                })
                channel.send({ embeds: [embed] })
            })
    }
}

module.exports = newChannel
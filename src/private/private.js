const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ChannelType, PermissionFlagsBits } = require('discord.js')
const config = require('../config.json').private

const private = (client) => {
    client.on('interactionCreate', async i => {
        privateCreate(client, i)
    })
}

const privateCreate = (c, i) => {
    if (i.isButton() && i.customId == 'private') {
        c.guilds.cache.get('489087056241229845').channels.create({
            name: `🔓${i.user.username}`,
            type: ChannelType.GuildText,
            position: 40,
            permissionOverwrites: [
                {
                    id: i.user.id,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages]
                }
            ]
        })
        i.reply({
            content: config.messages.privateCreate
                .replace('{0}', '527941042901745686'),
            ephemeral: true
        })
    }
}

const privateInfo = (c) => {

    const content = config.embeds.main

    const embed = new EmbedBuilder()
        .setTitle(content.title)
        .setColor(
            content.color
        )
        .setDescription(
            content.description
                .replace('{0}', content.maxChannels.toString())
        )
    const row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('private')
                .setLabel(content.button)
                .setStyle(ButtonStyle.Success)
        )

    c.channels.cache.get('1076900877459271711').send({ embeds: [embed], components: [row] })
}

module.exports = private
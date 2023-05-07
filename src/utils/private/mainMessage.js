const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')
const config = require('../config.json').private

const mainMessage = (c) => {

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

module.exports = mainMessage
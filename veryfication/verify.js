const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')

const verifyUser = (c, gMember) => {

    const embed = new EmbedBuilder()
        .setAuthor({ name: `Witaj ${gMember.user.username} w Kvba's Community!`, iconURL: `https://cdn.discordapp.com/avatars/${gMember.user.id}/${gMember.user.avatar}.webp?size=128` })
        .setColor('#4F7942')
        .setDescription('Miło Cię tu widzieć! Ale olejmy te uprzejmości. \nJesteś tu, bo wolę nie wpuszczać tutaj jakichś wścibskich botów, wiesz o co chodzi. Kliknij poniższy przycisk, a oszczędzisz sobie tych uprzejmości z mojej strony i dotrzesz tam, dokąd dotrzeć (chyba) chciałeś. Powodzonka.')
        .setFooter({ text: gMember.user.id })
    const row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('verify')
                .setLabel('Zweryfikuj się')
                .setStyle(ButtonStyle.Success),
        );

    c.channels.cache.get('502452827562442757').send({ embeds: [embed], components: [row] })
}

module.exports = verifyUser
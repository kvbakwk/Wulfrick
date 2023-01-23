const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')
const verifyConfig = require('../config.json').verify

const verify = (client) => {
    client.on('guildMemberAdd', async member => {
        verifyUser(client, member)
    })
    client.on('interactionCreate', async i => {
        verifyClick(client, i)
    })
}



const verifyUser = (c, gMember) => {

    const embed = new EmbedBuilder()
        .setAuthor({ name: `Witaj ${gMember.user.username} w Kvba's Community!`, iconURL: `https://cdn.discordapp.com/avatars/${gMember.user.id}/${gMember.user.avatar}.webp?size=128` })
        .setColor('#4F7942')
        .setDescription('Miło Cię tu widzieć! Ale olejmy te uprzejmości. \nJesteś tu, bo wolę nie wpuszczać tutaj jakichś wścibskich botów, wiesz o co chodzi. Kliknij poniższy przycisk, a oszczędzisz sobie tych uprzejmości z mojej strony i dotrzesz tam, dokąd dotrzeć (chyba) chciałeś. Powodzonka.')
    const row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId(gMember.user.id)
                .setLabel('Zweryfikuj się')
                .setStyle(ButtonStyle.Success),
        );

    c.channels.cache.get('502452827562442757').send({ embeds: [embed], components: [row] })
}

const verifyClick = (c, i) => {
    if (i.isButton()) {
        if (i.customId == i.member.user.id) {
            const messages = verifyConfig.messages.goodVerifyClick
            i.member.roles.remove(c.guilds.cache.get('489087056241229845').roles.cache.get('501127326453465088'))
            i.member.roles.add(c.guilds.cache.get('489087056241229845').roles.cache.get('513438458161922079'))
            i.message.delete()
                // .then(msg => console.log(`Deleted message from ${msg.author.username}`))
                .catch(console.error);
            i.reply({ content: messages[Math.floor(Math.random() * messages.length)], ephemeral: true })
            return true
        } else if (i.customId.toString().length) {
            const messages = verifyConfig.messages.otherVerifyClick
            i.reply({ content: messages[Math.floor(Math.random() * messages.length)], ephemeral: true })
            return true
        } else {
            return false
        }
    }
    return false
}


module.exports = verify
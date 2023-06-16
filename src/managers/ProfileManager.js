const ProfileManager = (client, config) => {

    const { statuses, frequency } = config.profile

    setInterval(() => {
        try {
            let nr = Math.floor(Math.random() * statuses.length)
            let status = statuses[nr]
            client.user.setStatus('online')
            client.user.setPresence({
                activities: [{
                    name: status,
                    type: nr + 1
                }],
                status: 'dnd'
            })
        } catch (e) { }
    }, frequency * 20)

    console.log('\tProfile -> success')
}

module.exports = ProfileManager;
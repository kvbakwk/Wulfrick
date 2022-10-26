let statusList = ['Symulator Bota', 'rozkazów Kvby', 'http://kvba.pl/']
let time = 60

const status = (client) => {
    client.on('ready', () => {

        setInterval(() => {
            let nr = Math.floor(Math.random() * statusList.length)
            let status = statusList[nr]
            client.user.setStatus('online')
            client.user.setPresence({
                activities: [{ name: status, type: nr + 1 }], status: 'dnd'
            })
        }, time * 20)

    })
}


module.exports = status
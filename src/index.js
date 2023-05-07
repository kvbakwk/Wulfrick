const { Ready, MessageCreate, MessageUpdate, MessageDelete, ChannelCreate, ChannelUpdate, ChannelDelete, GuildMemberAdd, GuildMemberRemove } = require('./handlers/Handlers')
const { InitManager, LobbyManager } = require('./managers/Managers')
const { config, token } = require('./files/Files')


console.log('Loading...\n')
console.log('Managers:')
const { client, init } = InitManager()
const { joinUser, leaveUser } = LobbyManager(config)


console.log('Handlers:')
Ready(client, init)
MessageCreate(client)
MessageUpdate(client)
MessageDelete(client)
ChannelCreate(client)
ChannelUpdate(client)
ChannelDelete(client)
GuildMemberAdd(client, joinUser)
GuildMemberRemove(client, leaveUser)


client.login(token)
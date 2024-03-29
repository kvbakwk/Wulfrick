const {
  InitManager,
  LobbyManager,
  ProfileManager,
  VerificationManager,
  LoggerManager,
} = require("./managers/Managers");
const {
  Ready,
  MessageCreate,
  MessageUpdate,
  MessageDelete,
  ChannelCreate,
  ChannelUpdate,
  ChannelDelete,
  GuildMemberAdd,
  GuildMemberRemove,
  InteractionCreate,
} = require("./handlers/Handlers");
const { config, token } = require("./files/Files");

console.log("Loading...\n");
console.log("Managers:");
const { client } = InitManager();
const { joinUser, leaveUser } = LobbyManager(config);
ProfileManager(client, config);
const { verifyUser, deleteVerify, verifyClick } = VerificationManager(config);
const { deleteMsg, editMsg } = LoggerManager(config);

console.log("Handlers:");
Ready(client);
MessageCreate(client, config);
MessageUpdate(client, config, editMsg);
MessageDelete(client, config, deleteMsg);
ChannelCreate(client);
ChannelUpdate(client);
ChannelDelete(client);
GuildMemberAdd(client, joinUser, verifyUser);
GuildMemberRemove(client, leaveUser, deleteVerify);
InteractionCreate(client, verifyClick);

client.login(token);

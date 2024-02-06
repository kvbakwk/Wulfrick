const Ready = require("./Ready");
const MessageCreate = require("./MessageCreate");
const MessageUpdate = require("./MessageUpdate");
const MessageDelete = require("./MessageDelete");
const ChannelCreate = require("./ChannelCreate");
const ChannelUpdate = require("./ChannelUpdate");
const ChannelDelete = require("./ChannelDelete");
const GuildMemberAdd = require("./GuildMemberAdd");
const GuildMemberRemove = require("./GuildMemberRemove");
const InteractionCreate = require("./InteractionCreate");

module.exports = {
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
};

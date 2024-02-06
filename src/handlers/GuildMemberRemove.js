const GuildMemberRemove = (client, leaveUser, deleteVerify) => {
  client.on("guildMemberRemove", async (member) => {
    console.log("newuser");
    leaveUser(client, member);
    deleteVerify(client, member);
  });

  console.log("\tGuildMemberRemove(1) -> success");
};

module.exports = GuildMemberRemove;

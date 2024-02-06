const MessageUpdate = (client, config, editMsg) => {
  client.on("messageUpdate", (msgOld, msgNew) => {
    editMsg(client, config, msgOld, msgNew);
  });

  console.log("\tMessageUpdate(1) -> success");
};

module.exports = MessageUpdate;

const InteractionCreate = (client, verifyClick) => {
  client.on("interactionCreate", (i) => {
    verifyClick(client, i);
  });

  console.log("\tInteractionCreate(1) -> success");
};

module.exports = InteractionCreate;

const { Client, GatewayIntentBits } = require("discord.js");

const InitManager = () => {
  const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.GuildMembers,
      GatewayIntentBits.GuildIntegrations,
    ],
  });

  console.log("\tInit -> success");
  return { client };
};

module.exports = InitManager;

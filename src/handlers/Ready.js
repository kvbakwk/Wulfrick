const Ready = (client) => {
  client.on("ready", (e) => {});

  console.log("\tReady(0) -> success");
};

module.exports = Ready;

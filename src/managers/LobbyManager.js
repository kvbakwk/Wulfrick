const LobbyManager = (config) => {
  const dateFormat = (date) => {
    const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    const month =
      date.getMonth() + 1 < 10
        ? "0" + (parseInt(date.getMonth()) + 1)
        : parseInt(date.getMonth()) + 1;
    const year = date.getFullYear();
    const hours =
      date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    const minutes =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    const seconds =
      date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

    return { day, month, year, hours, minutes, seconds };
  };

  const joinUser = (c, member) => {
    const { day, month, year, hours, minutes, seconds } = dateFormat(
      member.joinedAt
    );

    const message = `:inbox_tray: <@${member.user.id}>! \`\`${member.user.tag}\`\` ||${member.user.id}|| ${day}/${month}/${year} • ${hours}:${minutes}:${seconds}`;

    c.channels.cache.get(config.lobby.welcomeId).send(message);
  };

  const leaveUser = (c, member) => {
    const { day, month, year, hours, minutes, seconds } = dateFormat(
      member.joinedAt
    );

    const message = `:outbox_tray: <@${member.user.id}>! \`\`${member.user.tag}\`\` ||${member.user.id}|| ${day}/${month}/${year} • ${hours}:${minutes}:${seconds}`;

    c.channels.cache.get(config.lobby.goodbyeId).send(message);
  };

  console.log("\tLobby -> success");
  return { joinUser, leaveUser };
};

module.exports = LobbyManager;

export default {
  name: "interactionCreate",
  async execute(interaction) {
    if (!interaction.isChatInputCommand())
      return "Not a chat input command! Try again fool :D";

    const command = client.commands.get(interaction.commandName);

    if (!command) return "Command not found! Did I forget to steal from you?";

    try {
      await command.execute(interaction);
    } catch (err) {
      console.error(err);
      await interaction.reply({
        content:
          "There was an error while executing this command!\nNot joking! Run for your life!!!\nHAhaHAHAha, you should have seen your face!!\nJust relax while my people solve this, what about another command?",
        ephemeral: true,
      });
    }
  },
};

import { SlashCommandBuilder } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("user")
    .setDescription("Replies with user info!"),
  async execute(interaction) {
    await interaction.reply({
        content: `Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`,
        ephemeral: true,
      });
  },
};

import { SlashCommandBuilder } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("server")
    .setDescription("Replies with server info!"),
  async execute(interaction) {
    await interaction.reply(
      `Server name: ${interaction.guild.name}\nTotal fools: ${interaction.guild.memberCount}\nCreated at: ${interaction.guild.createdAt}`
    );
  },
};

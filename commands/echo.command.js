import { SlashCommandBuilder } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("joke")
    .setDescription("Replies with Patches opnion about the provided joke!")
    .addStringOption((option) =>
      option
        .setName("joke")
        .setDescription("The joke to Patches review")
        .setRequired(true)
    ),
  async execute(interaction) {
    await interaction.reply(`${interaction.option.getString("input")}\n...\nHAhaHAHAHahAhah\nWhat a joke!`);
  },
};

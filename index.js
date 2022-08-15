import { Client, GatewayIntentBits } from "discord.js";
import config from "./config.json" assert { type: "json" };

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once("ready", () => {
  console.log("Ready!");
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand())
    return "Not a chat input command! Try again fool :D";

  const { commandName } = interaction;

  if (commandName === "ping") {
    await interaction.reply({
      content: "Pong! MwaHAhaHAHAhAHAhHAHAha",
      ephemeral: true,
    });
  } else if (commandName === "server") {
    await interaction.reply(
      `Server name: ${interaction.guild.name}\nTotal fools: ${interaction.guild.memberCount}\nCreated at: ${interaction.guild.createdAt}`
    );
  } else if (commandName === "user") {
    await interaction.reply({
      content: `Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`,
      ephemeral: true,
    });
  }
});

client.login(config.token);

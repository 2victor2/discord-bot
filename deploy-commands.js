import config from "./config.json" assert { type: "json" };
import { SlashCommandBuilder, Routes } from "discord.js";
import { REST } from "@discordjs/rest";

const commands = [
  new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with pong!"),
  new SlashCommandBuilder()
    .setName("user")
    .setDescription("Replies with user info!"),
  new SlashCommandBuilder()
    .setName("server")
    .setDescription("Replies with server info!"),
  new SlashCommandBuilder()
    .setName("echo")
    .setDescription("Replies with your input!")
    .addStringOption((option) =>
      option
        .setName("input")
        .setDescription("The input to echo back")
        .setRequired(true)
    ),
].map((command) => command.toJSON());

console.log(commands);

const rest = new REST({ version: 10 }).setToken(config.token);

rest
  .put(Routes.applicationCommands(config.clientId), {
    body: commands,
  })
  .then(() => console.log("Successfully registered application commands."))
  .catch(console.error);

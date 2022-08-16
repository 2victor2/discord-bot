import { Client, Collection, GatewayIntentBits } from "discord.js";
import config from "./config.json" assert { type: "json" };
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
const commandsPath = path.join(__dirname, "commands");
const commandsFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith(".js"));

for (const file of commandsFiles) {
  const filePath = path.join(commandsPath, file);
  const command = await import(filePath);
  // Set a new item in the Collection
  // With the key as the command name and the value as the exported module
  client.commands.set(command.default.data.name, command);
}

client.once("ready", () => {
  console.log("Ready!");
});

client.on("interactionCreate", async (interaction) => {
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
});

client.login(config.token);

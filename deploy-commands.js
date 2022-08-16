import config from "./config.json" assert { type: "json" };
import { REST } from "@discordjs/rest";
import { Routes } from "discord.js";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const commands = [];

const commandsPath = path.join(__dirname, "commands");

const commandsFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith(".js"));

for (const file of commandsFiles) {
  const filePath = path.join(commandsPath, file);
  const command = await import(filePath);
  commands.push(command.default.data.toJSON());
}

const rest = new REST({ version: 10 }).setToken(config.token);

rest
  .put(Routes.applicationCommands(config.clientId), {
    body: commands,
  })
  .then(() => console.log("Successfully registered application commands."))
  .catch(console.error);

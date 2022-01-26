require("dotenv").config();
const { Client } = require("discord.js");
// const CheckInput = require("./_helpers/check-string");
// const getLocation = require("./_helpers/get-location");
const data = require("./_service/data");

//New Client Instance
const client = new Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
  intents: [
    "DIRECT_MESSAGES",
    "DIRECT_MESSAGE_REACTIONS",
    "GUILD_MESSAGES",
    "GUILD_MESSAGE_REACTIONS",
    "GUILDS",
  ],
});

//Event Listener for when bot comes online
client.on("ready", () => {
  console.log("Bot Is online");
});

//Detects the Message from users
client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  const MESSAGE_LC = message.content.trim().toLowerCase();
  var input = MESSAGE_LC.split(" ");
  if (input[0] === "!weather") {
    var location = input[1];
    var weather = await data(location);
    var umbrella = "";
    if (weather.clouds.all > 65) {
      umbrella = "You Better Take an Umbrella!";
    } else {
      umbrella = "Doesn't look like You need an Umbrella";
    }
    message.reply(`
      Your City : ${weather.name} has ${weather.weather[0].main} weather today.
      Maximum Temperature is ${weather.main.temp_max} Celcius and Minimum Temperature is ${weather.main.temp_min} Celcius
      With Pressure of ${weather.main.pressure} Bar and Humidity of ${weather.main.humidity}
      Wind Speed is ${weather.wind.speed}
      Cloud Cover is ${weather.clouds.all}% so ${umbrella}
    `);
    return;
  } else {
    message.reply("Incorrect Syntax");
    return;
  }
});

//Login The Bot which makes it Online on Server.
client.login(process.env.TOKEN);

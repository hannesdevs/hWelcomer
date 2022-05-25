// Configs

const Discord = require('discord.js')
require("dotenv").config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})


//  console.log (duh)

client.on("ready", () => {
    console.log(`Logget inn som ${client.user.tag}`)
})

client.login(process.env.TOKEN)
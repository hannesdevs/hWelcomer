// Configs

const Discord = require('discord.js')
require("dotenv").config()

const TOKEN = "OTc4OTU3MTAyOTk3NDQyNjEw.GR8J5W.nLRiEz65japKyXjI_-_Mbwgen-mK75hEE9Sf0o"

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

// noen hyggelige tilbakemeldinger

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello! How are you?")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "im good"){
        message.reply("Good too hear!")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "im fine"){
        message.reply("Good too hear!")
    }
})

client.login(process.env.TOKEN)
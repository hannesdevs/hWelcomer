// Configs

const Discord = require('discord.js')
require("dotenv").config()

const generateImage = require("./generateImage")

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})


//  console.log (duh)

client.on("ready", () => {
    console.log(`Logget inn som ${client.user.tag}`)
})

const welcomeChannelId = "978969837495779348"

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `<@${member.id}> Welcome to the server!`,
        files: [img]
    })
})

client.login(process.env.TOKEN)
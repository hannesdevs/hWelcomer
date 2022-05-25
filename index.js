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
    console.log(`Logged in as ${client.user.tag}`)
})

// little config
const welcomeChannelId = "978969837495779348"

// sends the welcome message
client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `<@${member.id}> Welcome to the server!`, // remove this line of code if you dont want the bot to say "Welcome to the Server" along with the image.
        files: [img]
    })
})

// dosnt have to explain
client.login(process.env.TOKEN)

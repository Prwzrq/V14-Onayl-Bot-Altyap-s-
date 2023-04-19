const {Client,GatewayIntentBits,Partials, ActionRowBuilder} = require("discord.js"); 
const config = require("./config.json");
const keep_alive = require ('./keep_alive.js')
const mongoose = require ("mongoose")

const client = new Client({
partials: [Partials.Message, Partials.Channel,Partials.GuildMember,Partials.Reaction, Partials.GuildScheduledEvent,Partials.User,Partials.ThreadMember,],
intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildBans,GatewayIntentBits.GuildEmojisAndStickers,GatewayIntentBits.GuildIntegrations,GatewayIntentBits.GuildWebhooks,GatewayIntentBits.GuildInvites, GatewayIntentBits.GuildVoiceStates,GatewayIntentBits.GuildPresences,GatewayIntentBits.GuildMessages,GatewayIntentBits.GuildMessageReactions,GatewayIntentBits.GuildMessageTyping, GatewayIntentBits.DirectMessages,GatewayIntentBits.DirectMessageReactions,GatewayIntentBits.DirectMessageTyping,GatewayIntentBits.MessageContent],
});

module.exports = client;

mongoose.connect(process.env.mongo).then(() => {
console.log("Mongoya Bağlandım")
;
}).catch(() => { console.log("Mongoya Ne Yaptın Mk Bağlanamıyorum") })

require("./events/message.js")
require("./events/ready.js")

client.login(process.env.token)

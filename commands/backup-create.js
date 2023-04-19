const backup = require('../models/backup')
const config = require('../config.json')

module.exports = {
    name: "backup-create",
    description: "create backup",
    permissions: ["ADMINISTRATOR"],

    run: async (client, message, args) => {
const {v4: uuidv4} = require("uuid")
       // backup.create({sunucu: message.guild}).then((backupData) => {
        const generated = uuidv4()
await model.updateOne({ GuildID: message.guild.id }, { sahip: message.author.id, backupId: generated  }, { upsert: true });
        return message.channel.send('Backup created! Here is your ID: `'+ generated + `! Use `'+config.prefix+'backup-load '+generated+'` to load the backup on another server!');

    }).catch(() => {

        return message.channel.send(':x: An error occurred, please check if the bot is administrator!');

    });
    
}}

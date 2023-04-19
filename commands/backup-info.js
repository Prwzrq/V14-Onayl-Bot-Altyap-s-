const backup = require('../models/backup')
const config = require('../config.json')
const {EmbedBuilder} = require("discord.js");
 
module.exports = {
    name: "backup-info",
    description: "backup info",
    permissions: ["ADMINISTRATOR"],

    run: async (client, message, args) => {

          const backupID = args.join(' ');

    if (!backupID)
        return message.channel.send({ content: ':x: Please specify a valid backup ID!' });

    backup.fetch(backupID).then((backup) => {

        const date = new Date(backup.data.createdTimestamp);
        const yyyy = date.getFullYear().toString(), mm = (date.getMonth()+1).toString(), dd = date.getDate().toString();
        const formattedDate = `${yyyy}/${(mm[1]?mm:"0"+mm[0])}/${(dd[1]?dd:"0"+dd[0])}`;

const embed = new EmbedBuilder()
            .setAuthor('ℹ️ Backup', backup.data.iconURL)
            .addFields('Server name', backup.data.name)
            .addFields('Size', backup.size + ' kb')
            .addFields('Created at', formattedDate)
            .setColor('RANDOM')
            .setFooter({text: "Darcard"});

        return message.channel.send({embeds:[embed]});

    }).catch((err) => {

        if (err === 'No backup found')
            return message.channel.send(':x: No backup found for ID '+backupID+'!');
        else
            return message.channel.send(':x: An error occurred: '+(typeof err === 'string') ? err : JSON.stringify(err));

    });

  }}

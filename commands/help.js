const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const prefix = require('./../config.json').prefix

module.exports = {
    name: "help",
    description: "help cmmd",

    run: async (client, message, args) => {
            const embed = new EmbedBuilder()
      .setTitle('**__Backup Bot Help Command__**')
      .setDescription(`***Here are all the commands available in this bot!!*** 
      -> ${prefix}backup-create => Creates backup of the server..
      -> ${prefix}backup-info <id> => Displays the info on the provided id.. 
      -> ${prefix}backup-load <id> => Loads backup of the given server..
      -> ${prefix}help => Loads the help command`)
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
   .setFooter({ text: "Backup Bot"}) 
        .setColor('Random')

const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
      .setLabel('Support Server')
      .setStyle(5)
      .setURL('https://discord.gg/')
          
            );
      message.channel.send({ embeds: [embed], components: [row] })
    }}

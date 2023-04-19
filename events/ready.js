const client = require("../index");
const { Collection } = require("discord.js")
const fs = require("fs")

client.on("ready", () => {
console.log(`${client.user.tag} Bot Aktif!`)
client.user.setActivity(`Gelişmiş Backup Bot!`)

client.commands = new Collection();
client.aliases = new Collection();
fs.readdir("./commands/", (err, files) => {
if (err) console.error(err);
console.log(`${files.length} Toplam Komut!`);
files.forEach(f => {
let props = require(`../commands/${f}`);
    
console.log(`[Adabøwale] Bot Hazır!`);
    
client.commands.set(props.name,props);
});
});

});  

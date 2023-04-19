const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    sunucu: String,
    sahip: String,
    id: String,
    name: String,
    guildID: String,
    id: String,
    roles: Array,
    ban: Array,
    channels: Array,
    emojis: Array,
    })
    
module.exports = mongoose.model('backup', schema)

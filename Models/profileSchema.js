const mongoose = require('mongoose');
const profileschema = new mongoose.Schema({
    userID: {type: String, require: true},
    serverID: {type: String, require: true},
    coins: {type: Number, default: 100},
    bank: {type: Number},
    level: {type: Number, default: 1},
    xp: {type: Number},
});
const model = mongoose.model("ProfileModels", profileschema);
module.exports= model;
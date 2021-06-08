const mongoose = require('mongoose')
const itemschema = new mongoose.Schema({
    itemid: {type: Number, require: true},
    name: {type: String, require: true},
    value: {type: Number, require: true},
    userid: {type: String},
    serverid: {type: String, require: true},
});
const model = mongoose.model("ItemModels", itemschema);
module.exports= model;
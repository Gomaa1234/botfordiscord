const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let st = "";
let item = new mongoose.Schema({
    itemid: {type: Number, require: true},
    name: {type: String, require: true},
    value: {type: Number, require: true},
    userid: {type: String},
});
function idmodel(str){
    try{
        if(st != str){
            st = str;
            return model_ = mongoose.model(str+'_item_model', item);
        }else{
            return model_;
        }
    }catch(err){
        return model_;
    }
}
module.exports = idmodel;

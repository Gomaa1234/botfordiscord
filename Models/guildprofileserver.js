const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let st = "";
const profileschema = new mongoose.Schema({
    userID: {type: String, require: true},
    coins: {type: Number, default: 100},
    bank: {type: Number},
    level: {type: Number, default: 1},
    xp: {type: Number},
});
function idproflilemodel(str){
    try{
        if(st != str){
            st = str;
            return model_ = mongoose.model(str+'_profiles_data', profileschema);
        }else{
            return model_;
        }
    }catch(err){
        return model_;
    }
}
module.exports = idproflilemodel;
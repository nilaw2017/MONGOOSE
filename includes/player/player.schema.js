const MONGOOSE = require("mongoose");

const UserSchema = new MONGOOSE.Schema ({
    firstName : {
        type : String,
        
    },
    lastName : {
        type : String,
        
    }
})

module.exports = MONGOOSE.model("player", UserSchema);
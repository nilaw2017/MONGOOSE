const MONGOOSE = require("mongoose");

const UserSchema = new MONGOOSE.Schema ({
    username : {
        type : String,
        
    },
    email : {
        type : String,
        
    }
})

module.exports = MONGOOSE.model("player", UserSchema);
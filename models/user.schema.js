const MONGOOSE = require("mongoose");

const UserSchema = new MONGOOSE.Schema ({
    username : {
        type : String,
        required
    },
    email : {
        type : String,
        required
    }
})

module.exports = MONGOOSE.model("player", UserSchema);
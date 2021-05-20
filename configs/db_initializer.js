const DB_CONFIG = require("./db_config");

const MONGOOSE = require("mongoose");

MONGOOSE.connect( DB_CONFIG.CONNECTION_URL + "/" + DB_CONFIG.DB_NAME, {
    useNewUrlParser : true,
    useUnifiedTopology : true
}, function (err) {
    if (err) {
        console.log("Something went wrong while connecting to Database")
    }
    console.log("Successfully connected to Database")
})
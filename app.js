require("./configs/db_initializer");
const PLAYER_CONTROLLER = require("./includes/player/player.controller")
const PORT = "9009"

const EXPRESS = require("express");
const APP = EXPRESS();

APP.use(EXPRESS.urlencoded({
    extended : true
}))

APP.use("/player", PLAYER_CONTROLLER)

APP.get( function( error, req, res) {
    res.json( {
        msg : error.msg || error,
        status : error.status || 400
    })
})

APP.listen(PORT, function(err) {
    if (err) {
        console.log("Something went wrong!!!")
    }
    console.log("Server Listening at PORT ==>", PORT)
})
require("./configs/db_initializer");
const PORT = "9000"

const EXPRESS = require("express");
const APP = EXPRESS();



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
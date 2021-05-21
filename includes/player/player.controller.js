const ROUTER = require("express").Router();

const PLAYER_SCHEMA = require("./player.schema.js");

ROUTER.post("/register", function(req, res, next){
    // PLAYER_SCHEMA
    //     .insertOne(req.body)
    //     .then( function (response) {
    //         res.json(response);
    //     })
    //     .catch( function (err) {
    //         next(err);
    //     })
    let data = req.body;

    var newPlayer = new PLAYER_SCHEMA({});

    newPlayer.firstName = data.firstName;
    newPlayer.lastName = data.lastName;

    newPlayer.save(function (err, saved) {
        if(err){
            return nex(err)
        }
        res.json(saved)
    })
})

module.exports = ROUTER;
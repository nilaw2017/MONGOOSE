const ROUTER = require("express").Router();

const PLAYER_SCHEMA = require("./player.schema.js");

ROUTER.post("/register", function(req, res, next){
    PLAYER_SCHEMA
        .insert(req.body)
        .then( function (response) {
            res.json(response);
        })
        .catch( function (err) {
            next(err);
        })
})

module.exports = ROUTER;
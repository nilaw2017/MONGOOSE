const MONGO_DB = require("mongodb")

const MONGO_CLIENT = MONGO_DB.MongoClient;

const CONNECTION_URL = "mongodb://localhost:27017";

const DB_NAME = "game";

module.exports = {

    MONGO_CLIENT,

    CONNECTION_URL,

    DB_NAME

}
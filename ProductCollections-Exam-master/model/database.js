const host = "mongodb://127.0.0.1:27017";
const db_name = "Product";
const mongoose = require("mongoose");

class Database{
    constructor(){
        this._connect();
    }
    async _connect(){
        try {
            await mongoose.connect(`${host}/${db_name}`);
            console.log("Connected database");    
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports = new Database();
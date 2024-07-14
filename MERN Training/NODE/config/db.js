const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        //connection with mongodb 
        await mongoose.connect('mongodb://localhost:27017/task-management')
        console.log('Database Connected.');
    } catch (error) {
        console.log("Database Connection Error", error);
    }
};

module.exports = connectDb;
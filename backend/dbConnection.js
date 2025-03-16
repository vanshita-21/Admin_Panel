const mongoose = require("mongoose");

let connection;
const  dbConnection = () => {
    let url = process.env.DB_URL;

    mongoose.set('strictQuery', false);

    if (!url) {
        console.error("Error: Missing DB_URL in environment variables.");
        process.exit(1);
    }

    mongoose.connect(url);

    connection = mongoose.connection;

    connection.on("error", (err) => {
        console.log(`Database Connection Error: ${err}`);
    });
    connection.once("open", () =>  {
        console.log("Database Connection Successful");        
    })
}

dbConnection();
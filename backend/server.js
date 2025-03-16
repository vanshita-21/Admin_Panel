const express = require('express');
const cors = require('cors');
require("dotenv").config();
require("./dbConnection");

const app = express();

app.use(express.json())
app.use(cors())

app.get('/', (req,res) => {
    res.send('Hello World!');
})

//errors
app.use((req,res) => res.status(404).json({status: false, message: "Route not found", data: []}))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`))
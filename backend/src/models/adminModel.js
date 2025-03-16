const mongoose = require("mongoose");
const AdminSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    status: {
        type: Number,
        enum: [0,1,2],
        default: 1
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    modifiedAt: {
        type: Date,
        default: Date.now()
    },

});
module.exports = mongoose.model("admins", AdminSchema)
const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    name: { type: String, required: true },
    disabilities: { type: Array, required: true },
    description: { type: String, required: false },
    history: { type: Array, required: false },
    pic: { type: Buffer , required: false },
    cv: { type: Buffer , required: false },
},{
    timestamps: true
});

module.exports = model("users", schema);
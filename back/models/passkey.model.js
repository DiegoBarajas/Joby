const { Schema, model } = require('mongoose');

const schema = new Schema({
    userId: { type: String, required: true, unique: true },
    userEmail: { type: String, required: true, unique: true },
    passkey: { type: String, required: true },
    expDate: { type: Date, expires: 3600, default: Date.now } // Expira en 1 hora
},{
    timestamps: true
});

module.exports = model('passkey', schema);
const { Schema, model } = require('mongoose');


const userSchema = new Schema(
{
email: { type: String, required: true, unique: true, lowercase: true, trim: true },
name: { type: String, required: true },
passwordHash: { type: String, required: true },
},
{ timestamps: true }
);


module.exports = model('User', userSchema);
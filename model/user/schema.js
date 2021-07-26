import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String },
  token: String,
  status: String,
  role: String,
  image: String,
  referer: mongoose.ObjectId,
  tag: String,
  dateCreated: { type: Date, default: Date.now },
  dateUpdated: { type: Date, default: Date.now }
})

module.exports = userSchema

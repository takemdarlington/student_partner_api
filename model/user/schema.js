import mongoose from 'mongoose';

const { Schema } = mongoose;

import facultySchema from '../faculty/schema';

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String },
  faculty: facultySchema
})

module.exports = userSchema

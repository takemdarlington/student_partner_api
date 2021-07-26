import mongoose from 'mongoose';

const { Schema } = mongoose;

const facultySchema = new Schema({
  code: { type: String, required: true },
  name: { type: String },
  status: String,
  dateCreated: { type: Date, default: Date.now },
  dateUpdated: { type: Date, default: Date.now }
})

export default facultySchema;

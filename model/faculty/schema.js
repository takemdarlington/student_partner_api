import mongoose from 'mongoose';

const { Schema } = mongoose;

const facultySchema = new Schema({
  title: { type: String, required: true },
  body: { type: String }
})

export default facultySchema;

import mongoose from 'mongoose';

const { Schema } = mongoose;

const CategorySchema = new Schema({
  name: { type: String, required: true },
  status: { type: String },
  tag: String,
  image: String,
  parent: mongoose.ObjectId,
  dateCreated: { type: Date, default: Date.now },
  dateUpdated: { type: Date, default: Date.now }
})

export default CategorySchema;

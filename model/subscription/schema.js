import mongoose from 'mongoose';

const { Schema } = mongoose;

const facultySchema = new Schema({
  expiry_date: { type: Date },
  number_of_allowed_users: { type: Number },
  number_of_logged_in_users: { type: Number },
  category_id: mongoose.ObjectId,
  subscriber_id: mongoose.ObjectId,
  status: String,
  dateCreated: { type: Date, default: Date.now },
  dateUpdated: { type: Date, default: Date.now }
})

export default facultySchema;

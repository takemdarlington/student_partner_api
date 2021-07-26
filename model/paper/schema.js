import mongoose from 'mongoose';

const { Schema } = mongoose;

const facultySchema = new Schema({
  status: String,
  dateCreated: { type: Date, default: Date.now },
  dateUpdated: { type: Date, default: Date.now },
  question_paper_tutor_id: mongoose.ObjectId,
  solution_paper_tutor_id: mongoose.ObjectId,
  question_paper_link: String,
  solution_paper_link: String,
  type: String,
  category_id: mongoose.ObjectId,
  year: Number,
  image: String
})

export default facultySchema;

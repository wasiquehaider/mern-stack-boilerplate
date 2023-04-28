import mongoose from "mongoose";

const academicsScheme = mongoose.Schema(
  {
    stdId: String,
    firstName: String,
    lastName: String,
    email: String,
    programOfStudy: String,
    courseCode: String,
    courseDescription: String,
    credits: Number,
    grade: String,
    term: String,
  },
  { timestamps: true }
);

const Academics = mongoose.model("Academics", academicsScheme);
export default Academics;

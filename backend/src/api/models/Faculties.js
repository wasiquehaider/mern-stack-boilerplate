import mongoose from "mongoose";

const facultiesScheme = mongoose.Schema(
  {
    "facultyName": String,
    "researchArea": String,
    "Designation": String,
    "college": String,
    "officeLocation": String,
    "email": String,
    "phone": String
  },
  { timestamps: true }
);

const Faculties = mongoose.model("Faculties", facultiesScheme);
export default Faculties;

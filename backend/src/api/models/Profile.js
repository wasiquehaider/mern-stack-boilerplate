import mongoose from "mongoose";

const profileScheme = mongoose.Schema(
  {
    stdId: String,
    firstName: String,
    lastName: String,
    gender: String,
    DOB: String,
    email: String,
    phone: String,
    mailingAddress: String,
    programOfStudy: String,
    studentStatus: String,
    residence: String,
    advisor: String,
    permanentAddress: String,
    currentGPA: String,
    academicLevel: String,
    concentration: String,
    college: String,
    graduationDate: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Profile = mongoose.model("Profile", profileScheme);
export default Profile;

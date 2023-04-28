import mongoose from "mongoose";

const paymentsScheme = mongoose.Schema(
  {
    stdId: String,
    firstName: String,
    lastName: String,
    term: String,
    detailCode: String,
    description: String,
    charge: Number,
    payment: Number,
    balance: Number,
    programOfStudy: String,
  },
  { timestamps: true }
);

const Payments = mongoose.model("Payments", paymentsScheme);
export default Payments;

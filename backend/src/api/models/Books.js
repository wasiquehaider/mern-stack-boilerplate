import mongoose from "mongoose";

const booksScheme = mongoose.Schema(
  {
    bookId: String,
    bookType: String,
    bookDetails: String,
    subject: String,
  },
  { timestamps: true }
);

const Books = mongoose.model("Books", booksScheme);
export default Books;

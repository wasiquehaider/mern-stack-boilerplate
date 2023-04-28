import mongoose from "mongoose";

const transcriptsScheme = mongoose.Schema(
  {
    stdId: String,
    firstName: String,
    lastName: String,
    email: String,
    mailingAddress: String,
    transcriptLevel: String,
    transcriptType: String,
    status: String,
  },
  { timestamps: true }
);

const Transcripts = mongoose.model("Transcripts", transcriptsScheme);
export default Transcripts;

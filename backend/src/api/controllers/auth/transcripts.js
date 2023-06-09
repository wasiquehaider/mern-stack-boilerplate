import Transcripts from "../../models/Transcripts.js";

const schemaName = Transcripts;
const schemaNameString = "Transcript";

export const getTranscripts = async (req, res) => {
  try {
    const q = req.query && req.query.q;
    let query = schemaName.find(
      q ? { name: { $regex: q, $options: "i" } } : {}
    );
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.limit) || 25;
    const skip = (page - 1) * pageSize;
    const total = await schemaName.countDocuments(
      q ? { name: { $regex: q, $options: "i" } } : {}
    );

    const pages = Math.ceil(total / pageSize);

    query = query.skip(skip).sort({ createdAt: -1 }).lean();

    const result = await query;

    res.status(200).json({
      startIndex: skip + 1,
      endIndex: skip + result.length,
      count: result.length,
      page,
      pages,
      total,
      data: result,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const putTranscriptStatus = async (req, res) => {
  try {
    const { stdId, status } = req.body;

    const object = await schemaName.findOneAndUpdate({ stdId }, { status });
    if (!object)
      return res.status(400).json({ error: `${schemaNameString} not found` });

    res.status(200).json({ message: `${schemaNameString} updated` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

import Payments from '../../models/Payments.js'

const schemaName = Payments

export const getStudentPayments = async (req, res) => {
  try {
    const q = req.query && req.query.q
    const {stdId, term} = req.body
    let query = schemaName.find({
      $and: [
        q ? { name: { $regex: q, $options: 'i' } } : {},
        { stdId: { $eq: stdId } },
        { term: { $eq: term } },
      ],
    });
    const page = parseInt(req.query.page) || 1
    const pageSize = parseInt(req.query.limit) || 25
    const skip = (page - 1) * pageSize
    const total = await schemaName.countDocuments(
      q ? { name: { $regex: q, $options: 'i' } } : {}
    )

    const pages = Math.ceil(total / pageSize)

    query = query.skip(skip).limit(pageSize).sort({ createdAt: -1 }).lean()

    const result = await query

    res.status(200).json({
      startIndex: skip + 1,
      endIndex: skip + result.length,
      count: result.length,
      page,
      pages,
      total,
      data: result,
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

import Profile from '../../models/Profile.js'
import User from '../../models/User.js'

const schemaName = Profile
const schemaNameString = 'Profile'

export const getProfile = async (req, res) => {
  try {
    const { _id } = req.user
    const objects = await schemaName
      .findOne({ user: _id })
      .lean()
      .sort({ createdAt: -1 })
      .populate('user', ['name', 'email', 'confirmed', 'blocked'])

    res.status(200).send(objects)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const postProfile = async (req, res) => {
  try {
    const { _id } = req.user
    const { mailingAddress, phone } = req.body

    const object = await schemaName.findOne({ user: _id }).populate('user')

    if (!object)
      return res.status(400).json({ error: `${schemaNameString} not found` })

    if (mailingAddress) await User.findOneAndUpdate({ _id }, { mailingAddress })
   

    object.mailingAddress = mailingAddress ? mailingAddress : object.mailingAddress
    object.phone = phone ? phone : object.phone
    object.user = _id
    await object.save()
    res.status(200).json({ message: `${schemaNameString} updated` })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const { User } = require('../models/')
const { comparedPassword } = require('../helpers/password');
const { generateToken } = require('../helpers/token')


class UserController {
  static async register(req, res, next) {
    try {
      const { full_name, email, password, role } = req.body;
      const newUser = { full_name, email, password, role }
      await User.create(newUser)
      res.status(201).json({ success: true, message: 'Successfully create new user' })
    } catch (err) {
      next(err)
    }
  }
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } })
      if (user && comparedPassword(password, user.password)) {
        const payload = { id: user.id, email: user.email, full_name: user.full_name }
        const access_token = generateToken(payload)
        res.status(200).json({ success: true, access_token })
      } else {
        next({ msg: 'Invalid email or password' })
      }
    } catch (err) {
      next(err)
    }
  }
}

module.exports = UserController;
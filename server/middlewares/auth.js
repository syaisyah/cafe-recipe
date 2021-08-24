const { User } = require('../models/')
const { verifToken } = require('../helpers/token')



const authentication = async (req, res, next) => {
  try {
    const decode = verifyToken(req.header.access_token)
    const user = await User.findByPk(+decode.id)
    if (user) {
      req.logginUser = { id: user.id, email: user.email, role: user.role }
    } else {
      next(err)
    }

  } catch (err) {
    next(err)
  }
}


const authAdmin = async (req, res, next) => {
  const roleUser = req.logginUser.role.toLowerCase()
    (roleUser === 'admin') ? next() : next({ msg: 'UnAuthorized - Access is Denied' })
}


module.exports = { authentication, authAdmin }
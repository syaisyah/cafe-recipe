function errorHandler(err, req, res, next) {
  console.log(err, 'err asli >>>>>>>>>')
  let statusCode = 500;
  let message = ['Internal Server Errors']

  switch (err.name) {
    case 'SequelizeValidationError':
      statusCode = 400
      if (err.errors[0].message === 'Invalid validator function: unique') {
        message = `${err.errors[0].path} is already exists`
      } else {
        message = err.errors.map(el => el.message)
      }
      break;
    case 'SequelizeUniqueConstraintError':
      statusCode = 400
      message = err.errors.map(el => `${el.value} is already exists`)
      break;
    case 'SequelizeDatabaseError':
      if (err.parent.code === '23502') {
        statusCode = 400
        message = err.errors[0].message
      }
      break;
    case 'JsonWebTokenError':
      statusCode = 401;
      message = [`UnAuthenticated - You are not logged in`]
      break;
  }

  switch (err.msg) {
    case 'Invalid email or password':
      statusCode = 400
      message = [`${err.msg}`]
      break;
    case 'UnAuthorized - Access is denied':
      statusCode = 403
      message = [`${err.msg}`]
      break;
    case 'Menu Not Found':
      statusCode = 404
      message = [`${err.msg}`]
      break;
    case 'Ingredient Not Found':
      statusCode = 404
      message = [`${err.msg}`]
      break;
    case 'Recipe Not Found':
      statusCode = 404
      message = [`${err.msg}`]
      break;
  }
  console.log(statusCode, message, 'error handelr ......')
  res.status(statusCode).json({ status: statusCode, message })
}

module.exports = errorHandler
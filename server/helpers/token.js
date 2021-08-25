const jwt = require('jsonwebtoken');

const verifyToken = token => jwt.verify(token, 'rahasianih');
const generateToken = payload => jwt.sign(payload, 'rahasianih')

module.exports = { verifyToken, generateToken }
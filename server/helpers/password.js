const bcrypt = require('bcrypt');

const hashPassword = password => bcrypt.hashSync(password, 10);
const comparedPassword = (password, hashPassword) => bcrypt.compareSync(password, hashPassword); // (password yang ada di app pas login, password yang ada di DB)

module.exports = { hashPassword, comparedPassword }
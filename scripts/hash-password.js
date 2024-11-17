const bcrypt = require('bcryptjs');

const password = 'root1234';
const hashedPassword = bcrypt.hashSync(password, 10);
console.log('Hashed password:', hashedPassword);

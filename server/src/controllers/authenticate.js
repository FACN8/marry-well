const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

console.log(data);

exports.authenticate = (req, res) => {
  const { username } = req.body;
  const { password } = req.body;

  console.log('The UserName: ', username);
  console.log('The Password: ', password);

  // bcrypt
  //   .hash(password, 10)
  //   .then(hash => console.log('Hash: ', hash))
  //   .catch(err => console.log(err));

  // Testing the bcrypt hashing function if works compared to 123 and it should return true
  bcrypt
    .compare(password, '$2b$10$MqmIfcE/pRl309z3dwAMxeBkU4CDAzRW29pj.ea6lHgeBjAYfDILC')
    .then(result => console.log('Result: ', result))
    .catch(err => console.log(err));

  res.send('none');
};

const express = require('express');

const router = express.Router();

const auth = require('./authenticate');

router.get('/', (req, res) => {
  res.send('Testing if the server work !!!');
});

router.post('/authenticate', auth.authenticate);

module.exports = router;

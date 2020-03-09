const data = require('../../tempData.json');

const checkIfUserExists = username => !!data.filter(user => user.username === username).length;

const { connect, connection } = require('mongoose');

connect('mongodb://localhost/networkingDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
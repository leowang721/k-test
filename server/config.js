const path = require('path')

module.exports = {
  SERVER: {
    ROOT: path.resolve(__dirname, '../build/'),
    PROTOCOL: 'http',
    HOST: '127.0.0.1',
    PORT: '3001'
  }
}

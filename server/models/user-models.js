const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  username:'string',
  password:'string'
})

const usershacktiv = mongoose.model('usershacktiv', schema)

module.exports = usershacktiv

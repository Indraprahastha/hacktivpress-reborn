const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  title:'string',
  content:'string',
  category:'string',
  author: [{type:mongoose.Schema.Types.ObjectId, ref: 'usershacktiv'}]
})

const artikelshacktiv = mongoose.model('artikelshacktiv', schema)

module.exports = artikelshacktiv

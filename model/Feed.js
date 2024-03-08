const mongoose = require('mongoose')
const moment = require('moment')

const schema = mongoose.Schema

const feedSchema = new schema({
  name: {
    type: String,
    required: true,
    maxlength: 15,
  },

  message: {
    type: String,
    required: true,
    maxlength: 40,
  },

  created_at: {
    type: Date,
    default: Date.now,
    get: function (createdAt) {
      return moment(createdAt).format("MMMM Do YYYY, h:mm:ss a");
    }
  }
}, { timeseries: true })

module.exports = mongoose.model('Feed', feedSchema)
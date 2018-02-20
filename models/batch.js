// models/game.js
const mongoose = require('../config/database')
const { Schema } = mongoose

const evaluationsSchema = new Schema({
  color: { type: String },
  date: { type: Date, default: Date.now },
  remark: { type: String }
})

const studentsSchema = new Schema({
  name: { type: String},
  photo: { type: String },
  evaluation: [ evaluationsSchema ],
  lastColor: { type: String }
})

const batchSchema = new Schema({
  batchNumber: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
  students: [ studentsSchema ],
  rating:  { type: String }
})

module.exports = mongoose.model('batches', batchSchema)

// const playerSchema = new Schema({
//   userId: { type: Schema.Types.ObjectId, ref: 'users' },
//   symbol: { type: String },
// });
//
// const gameSchema = new Schema({
//   players: [playerSchema],
//   winnerId: { type: Schema.Types.ObjectId, ref: 'users' },
//   userId: { type: Schema.Types.ObjectId, ref: 'users' },
//   draw: { type: Boolean, default: false },
//   createdAt: { type: Date, default: Date.now },
//   updatedAt: { type: Date, default: Date.now },
// });
//
// module.exports = mongoose.model('games', gameSchema)

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CensusSchema = new Schema({
    street: { type: String, required: true },
    city: { type: String },
    state: { type: String },
    zip: { type: String },
    number_of_people: { type: String },
    year: { type: String },
    census_taker: { type: String },
    updated_date: { type: Date, default: Date.now }
}, {
    collection: 'census'
});

module.exports = mongoose.model('Census', CensusSchema);

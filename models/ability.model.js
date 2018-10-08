const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AbilitySchema = new Schema({
    name: {type: String, required: true, max: 100},
    alias: {type: String, required: true, max: 3},
    description: {type: String, required: false, max: 1000}
});


// Export the model
module.exports = mongoose.model('Ability', AbilitySchema);

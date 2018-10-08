const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SkillSchema = new Schema({
    name: {type: String, required: true, max: 100},
    type: {type: String, required: false, max: 20},
    alias: {type: String, required: true, max: 5},
    ability: {type: String, required: true, max: 3},
    description: {type: String, required: false, max: 1000},
    reference: {type: String, required: false, max: 100},
    usage: {type: String, required: false, max: 1000}
});


// Export the model
module.exports = mongoose.model('Skill', SkillSchema);

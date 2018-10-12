const Ability = require('../models/ability.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.ability_create = function (req, res, next) {

    // console.log('Req >>>>>>>>>>>>>>>>>>>');
    // console.log(req.body);
    // console.log('<<<<<<<<<<<<<<<<<<< Req');

    let ability = new Ability(
        {
            name: req.body.name,
            alias: req.body.alias,
            description: req.body.description
        }
    );

    //e.g.
    // {
    //   "name": "Brawn",
    //   "alias": "bra",
    //   "description": ""
    // }

    ability.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Ability Created successfully')
    })
};

exports.ability_details = function (req, res) {
    Ability.findById(req.params.id, function (err, ability) {
        if (err) return next(err);
        res.send(ability);
    })
};

exports.ability_update = function (req, res) {
    Ability.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, ability) {
        if (err) return next(err);
        res.send('Ability updated.');
    });
};

exports.ability_delete = function (req, res) {
    Ability.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

const Ability = require('../models/ability.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.ability_create = function (req, res, next) {

    console.log('Req >>>>>>>>>>>>>>>>>>>');
    console.log(req);
    console.log('<<<<<<<<<<<<<<<<<<< Req');

    let ability = new Ability(
        {
            name: req.body.name,
            code: req.body.code
        }
    );

    ability.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Ability Created successfully')
    })
};

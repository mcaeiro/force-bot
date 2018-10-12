const Skill = require('../models/skill.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Skill controller!');
};

exports.skill_create = function (req, res, next) {

    // console.log('Req >>>>>>>>>>>>>>>>>>>');
    // console.log(req.body);
    // console.log('<<<<<<<<<<<<<<<<<<< Req');

    let skill = new Skill(
        {
            name: req.body.name,
            type: req.body.type,
            alias: req.body.alias,
            ability: req.body.ability,
            description: req.body.description,
            reference: req.body.reference,
            usage: req.body.usage
        }
    );

    //e.g.
    // {
    //   "name": "Brawl",
    //   "type": "Combat",
    //   "alias": "brw",
    //   "ability": "bra",
    //   "description": "This combat skill represents the ability of a character to fight hand-to-hand without weapons or through martial arts",
    //   "reference": "RaGP:7, A-BGR:22, A-CRB:131, E-BGR:22, E-CRB:120, F-BGR:22, F-CRB:129",
    //   "usage": "Make a melee attack while unarmed or using a Brawl weapon"
    // }

    skill.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Skill Created successfully')
    })
};

exports.skill_details = function (req, res) {
    Skill.findById(req.params.id, function (err, skill) {
        if (err) return next(err);
        res.send(skill);
    })
};

exports.skill_update = function (req, res) {
    Skill.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, skill) {
        if (err) return next(err);
        res.send('Skill updated.');
    });
};

exports.skill_delete = function (req, res) {
    Skill.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

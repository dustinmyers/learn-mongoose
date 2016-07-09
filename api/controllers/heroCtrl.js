var mongoose = require('mongoose');
var express = require('express');
var Hero = require('../models/HeroModel');

module.exports = {

    read: function(req, res) {

    },
     
    create: function(req, res) {
        Hero.create(req.body, function(err, result) {
            console.log('err: ', err);
            console.log('result: ', result);
            if (err) { return res.status(500).send(err) }
            else { res.send(result) }
        })
    }

}

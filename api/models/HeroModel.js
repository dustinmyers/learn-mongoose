var mongoose = require('mongoose');
var express = require('express');
var Schema = mongoose.Schema;

var Hero = new Schema({
        marvelId: Number,
        name: {type: String, required: true, unique: true},
        description: String,
        thumbnail: {
            path: {type: String, required: true, unique: true},
            extension: {type: String, required: true}
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Hero', Hero);
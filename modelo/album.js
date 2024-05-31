'use strict'

var mongoose = require("mongoose");
const artista = require('./artista');
var Schema = mongoose.Schema;

var EsquemaAlbum = Schema({
    titulo:String,
    descripcion:String,
    year:number,
    imagen: String,
    artista: {type: Schema.ObjectId, ref: "Artista" }
});

module.exports = mongoose.model('Album', EsquemaAlbum);
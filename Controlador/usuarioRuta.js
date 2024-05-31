'use strict'

var express = require('express');
var UsuarioControl = require('../Controlador/usuarioControl');

var api = express.Router();

api.get('/probando-controlador', UsuarioControl.prueba);
api.post('/registro', UsuarioControl.registroUsuario);
api.post('/login', UsuarioControl.accesoUsuario);
module.exports = api;

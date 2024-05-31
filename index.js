var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;

mongoose.connect('mongodb://127.0.0.1:27017/pruebas')
    .then(() => {
        console.log("Conexión exitosa a MongoDB");
        app.listen(port, function() {
            console.log("Servidor de API REST de música escuchando en http://localhost:" + port);
        });
    })
    .catch((err) => {
        console.error("Error al conectar a MongoDB:", err);
});
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const { mongoose } = require('./database')

const app = express();

//configuracion
app.set('port', process.env.PORT || 3000)

//middleware
app.use(morgan('dev'));
app.use(express.json());

//rutas
app.use('/api/zapatos', require('./routes/zapatoRouter'));

//archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static())

app.listen(app.get('port'), () => {
    console.log(`Servidor en el puerto ${app.get('port')}`);
});
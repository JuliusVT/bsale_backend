const express = require('express');
const app = express();
const morgan = require('morgan');
const mysql = require('mysql');
const myconn = require('express-myconnection');
const cors = require('cors');
const dbOption  = require('./config/database');

// configuraciones
app.set('port', process.env.PORT || 3000);
app.use(cors());

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(myconn(mysql, dbOption, 'single'));

// Rutas
app.get('/', (req, res) => {
    res.send('API REST Bsale test')
});
app.use('/api',require('./routes/index'))

// Inicio del servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
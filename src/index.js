const express = require('express');
const app = express();
const morgan = require('morgan');
const mysql = require('mysql');
const myconn = require('express-myconnection');
const cors = require('cors');
const { dbOptionDev } = require('./config/database');

// settings
app.set('port', process.env.PORT || 3000);
app.use(cors());
// app.use(cors({
//     origin: ['http://localhost:3000/', 'http://localhost:3006/']
// }));
// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(myconn(mysql, dbOptionDev, 'single'));

// routes
app.get('/', (req, res) => {
    res.send('API REST Bsale')
});
app.use('/api',require('./routes/index'))

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
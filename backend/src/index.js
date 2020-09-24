
const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const uuid = require('uuid/v4');
const { format } = require('timeago.js');

const path = require('path');

// intializations
const app = express();
require('./database');

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'));
app.use(express)
app.use(multer())

// routes
app.use(require('./routes/index'));

// static files

// start
async function main(){
    app.listen(app.get('port'))
    console.log(`Server on port ${app.get('port')}` )
}
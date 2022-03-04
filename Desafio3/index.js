//-IMPORTS
if (process.env.NODE_ENV !== 'production')
{require('dotenv').config()}
const express = require('express');
//const mongoose = require('mongoose');
const cors = require('cors');
//const multer = require('multer');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
const Container = require('./class.js');

//-MODELS
//const Products = require('./models/products');
//-INITIALIZATION

const app = express();
//require('./database')

//-STATIC
app.use(express.static(path.join(__dirname, 'public')));
//-MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(morgan('dev'));
//-ROUTES
 const Route = new Container;
/*-Lista de productos-*/
 app.use('/productos', Route.getAll);
/*----Productos Random----*/
 app.use('/productoRandom', Route.randomProduct)
/*----Testing Route----*/
 app.get('/test', Route.getAll);
//-SERVER-UP

 app.set('port', process.env.PORT || 3000);
 app.listen(app.get('port'), () => {console.log('Server is running on port', app.get('port')); });
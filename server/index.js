const express = require('express')
const path = require('path')
const url = require('url'),
      routes = require('./routes');

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'pug')
app.set('views', __dirname + '/views');

app.get('/', routes.index);
app.get('/about', routes.about);

app.listen(process.env.PORT || 3000);

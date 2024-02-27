const express = require('express')
const path = require('path')

const app = express()

const routesStudent = require('./routes/studen.routes')

require('dotenv').config()
app.set('port', 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.json())
app.use(routesStudent);

app.listen(app.get('port'), (e)=>{console.log('escuchando http://localhost:'+app.get('port'))})
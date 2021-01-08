const cors = require('cors');
const express = require('express');
const app = express();
app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}))
const routes = require('./router');


//app.use(express.static('public'));

app.use(routes);
app.listen(3000, function(){
    console.log('Servidor rodando na porta 3000');
})
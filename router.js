const express = require('express');
const app = express();
const router = express.Router();
const fs = require('fs');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(router);

let lorem = require('./lorem');




//router.get('/', (req, res) =>{
//    res.setHeader('Content-type', 'text/html');
    //coloca o conteudo do index dentro de uma variavel
//    let contentIndex = fs.readFileSync('./public/index.html', {encoding: "utf-8"});
    
//    res.write(contentIndex); // escreve o conteudo de contentindex
//    res.end();
//})


router.post('/', (req, res) =>{
    let valueInput = parseInt(req.body.numParagrafo); //parseInt(req.body.numParagrafo);

    let loremGerado = lorem.generateParagraphs(valueInput);
//    let contentIndex = fs.readFileSync('./public/index.html', {encoding: "utf-8"});
//    contentIndex = contentIndex.replace('<div class="loremaqui"></div>', `${loremGerado}`);
    console.log(valueInput)
    return res.json(loremGerado) // res.json
    
})

module.exports = router;
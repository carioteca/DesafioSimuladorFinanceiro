// Importar o módulos
import  express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';
import fetch from 'node-fetch';


//App
const app = express();

//JSON
app.use(express.urlencoded())
app.use(express.json())

//Templates
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

//Especificar CSS
//Diretório atual
const __dirname = path.resolve();
app.use(express.static(__dirname + '\\public'));
console.log(__dirname)

// Rotas
app.get('/', (req, res) => {
    fetch('http://localhost:3000/indicadores/',  {
        method: 'get',
        headers: {'Content-type': 'application/json; charset=UTF-8'},
      })
      .then(resposta=> resposta.json())
      .then(resposta => res.render('inicio', {ipca:resposta[1].valor, cdi:resposta[0].valor} ))
});

//sIMULAR
app.get('/simular/:rendimento/:indexacao', (req, res) => {
  let rendimento = req.params.rendimento;
  let indexacao = req.params.indexacao;
  
  fetch('http://localhost:3000/simulacoes/?tipoRendimento='+rendimento+'&tipoIndexacao='+indexacao, {
    method: 'GET',

    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then(resposta=> resposta.json())
  .then(resposta => res.render('simular', {simulacoes:resposta}))
});

//Servidor
app.listen(8080);
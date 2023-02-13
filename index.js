const express = require('express')
const app = express();
const convertTemp = require('./convertTemp')

app.get(('/'), (req, res) => {
  let temp = req.query.temp;
  let conversor = req.query.conversor;
  let tipo = req.query.tipo;
  let temperaturaGraus = convertTemp.convertTemp(tipo, temp, conversor);
  let json = {temperatura: temperaturaGraus};
  res.json(json);
});

app.listen(8080, () =>{
  let data = new Date();
  console.log('Servidor iniciado em: ' + data);
});
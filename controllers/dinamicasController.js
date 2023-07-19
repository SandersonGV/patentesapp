const express = require('express');
const DinamicaService = require('../services/DinamicaService');
const JogoService = require('../services/JogoService');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('potentes/admin/dinamica/index', { layout: 'main-admin' });
});

router.get('/detail/:id', (req, res) => {
  let { id } = req.params
  res.render('potentes/admin/dinamica/detail', { layout: 'main-admin', data: {id:id} });
});

router.get('/getOne/:id', async (req, res) => {
  let { id } = req.params
  let data = await DinamicaService.getOne(id);
  data.jogos = await JogoService.getAll(id)
  res.json(data)
});

router.get('/getAll', async (req, res) => {
  let data = await DinamicaService.getAll();
  res.json(data)
});

router.post('/add', async (req, res) => {
  let { data } = req.body
  let dataResult = await DinamicaService.Add(data);
  res.json(dataResult)
});

router.get('/remove/:id', async (req, res) => {
  let { id } = req.params
  let dataResult = await DinamicaService.remove(id);
  res.json(dataResult)
});

module.exports = router;

const express = require('express');
const JogoService = require('../services/JogoService');
const DesafioService = require('../services/DesafioService');
const router = express.Router();

router.get('/detail/:id', (req, res) => {
  let { id } = req.params
  res.render('potentes/admin/jogo/index', { layout: 'main-admin', data: { id: id } });
});

router.get('/getAll', async (req, res) => {
  let data = await JogoService.getAll();
  res.json(data)
});

router.get('/getOne/:id', async (req, res) => {
  let { id } = req.params
  let data = await JogoService.getOne(id);
  data.desafios = await DesafioService.getAll(id)
  res.json(data)
});

router.post('/add/:dinamicaId', async (req, res) => {
  let { dinamicaId } = req.params
  let { data } = req.body
  let dataResult = await JogoService.add(dinamicaId,data);
  res.json(dataResult)
});

router.get('/remove/:dinamicaId/:id', async (req, res) => {
  let { dinamicaId,id } = req.params
  let dataResult = await JogoService.remove(dinamicaId,id);
  res.json(dataResult)
});

module.exports = router;

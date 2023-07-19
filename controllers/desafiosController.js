const express = require('express');
const OpcaoService = require('../services/OpcaoService');
const DesafioService = require('../services/DesafioService');
const router = express.Router();

router.get('/detail/:id', (req, res) => {
  let { id } = req.params
  res.render('potentes/admin/desafio/index', { layout: 'main-admin', data: { id: id } });
});

router.get('/getAll', async (req, res) => {
  let data = await DesafioService.getAll();
  res.json(data)
});

router.get('/getOne/:id', async (req, res) => {
  let { id } = req.params
  let data = await DesafioService.getOne(id);
  data.opcoes = await OpcaoService.getAll(id)
  res.json(data)
});

router.post('/add/:jogoId', async (req, res) => {
  let { jogoId } = req.params
  let { data } = req.body
  let dataResult = await DesafioService.add(jogoId,data);
  for (const opcao of data.opcoes) {
      await OpcaoService.add(data.id,opcao)
  }
  data.opcoes
  res.json(dataResult)
});

router.post('/edit/:jogoId', async (req, res) => {
  let { jogoId } = req.params
  let { data } = req.body
  let dataResult = await DesafioService.add(jogoId,data);
  for (const opcao of data.opcoes) {
      await OpcaoService.add(data.id,opcao)
  }
  data.opcoes
  res.json(dataResult)
});

router.get('/remove/:jogoId/:id', async (req, res) => {
  let { jogoId,id } = req.params
  let dataResult = await DesafioService.remove(jogoId,id);
  res.json(dataResult)
});

module.exports = router;

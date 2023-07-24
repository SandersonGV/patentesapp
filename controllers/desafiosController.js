const express = require('express');
const OpcaoService = require('../services/OpcaoService');
const DesafioService = require('../services/DesafioService');
const router = express.Router();

router.get('/detail/:id', (req, res) => {
  let { id } = req.params
  res.render('potentes/admin/desafio/index', { layout: 'main-admin', data: { id: id } });
});

router.get('/getAll', async (req, res, next) => {
  try {
    let data = await DesafioService.getAll();
    res.status(200).json(data)
  } catch (error) {
    next(error)
  }
});

router.get('/getOne/:id', async (req, res, next) => {
  try {
    let { id } = req.params
    let data = await DesafioService.getOne(id);
    res.status(200).json(data)
  } catch (error) {
    next(error)
  }
});

router.post('/add/:jogoId', async (req, res, next) => {
  try {
    let { jogoId } = req.params
    let { data } = req.body
    data.jogoId = jogoId;
    let dataResult = await DesafioService.add(data);
    res.status(200).json(dataResult)
  } catch (error) {
    next(error)
  }
});

router.post('/edit/:jogoId', async (req, res, next) => {
  try {
    let { data } = req.body
    let id = data.id
    let dataResult = await DesafioService.edit(id, data);
    res.status(200).json(dataResult)
  } catch (error) {
    next(error)
  }
});

router.get('/remove/:id', async (req, res, next) => {
  try {
    let { id } = req.params
    let dataResult = await DesafioService.remove(id);
    res.status(200).json(dataResult)
  } catch (error) {
    next(error)
  }
});

module.exports = router;

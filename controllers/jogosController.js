const express = require('express');
const JogoService = require('../services/JogoService');
const DesafioService = require('../services/DesafioService');
const router = express.Router();

router.get('/detail/:id', (req, res, next) => {
  try {
    let { id } = req.params
    res.render('potentes/admin/jogo/index', { layout: 'main-admin', data: { id: id } });
  } catch (error) {
    next(error)
  }
});

router.get('/getAll', async (req, res, next) => {
  try {
    let data = await JogoService.getAll();
    res.status(200).json(data)
  } catch (error) {
    next(error)
  }
});

router.get('/getOne/:id', async (req, res, next) => {
  try {
    let { id } = req.params
    let data = await JogoService.getOne(id);
    data.desafios = await DesafioService.getAll(id)
    res.status(200).json(data)
  } catch (error) {
    next(error)
  }
});

router.post('/add/:dinamicaId', async (req, res, next) => {
  try {
    let { dinamicaId } = req.params
    let { data } = req.body
    let dataResult = await JogoService.add(dinamicaId, data);
    res.status(200).json(dataResult)
  } catch (error) {
    next(error)
  }
});

router.post('/edit/:id', async (req, res, next) => {
  try {
    let { id } = req.params
    let { data } = req.body
    let dataResult = await JogoService.edit(id, data);
    res.status(200).json(dataResult)

  } catch (error) {
    next(error)
  }
});

router.get('/remove/:dinamicaId/:id', async (req, res, next) => {
  try {
    let { dinamicaId, id } = req.params
    let dataResult = await JogoService.remove(dinamicaId, id);
    res.status(200).json(dataResult)
  } catch (error) {
    next(error)
  }
});

module.exports = router;

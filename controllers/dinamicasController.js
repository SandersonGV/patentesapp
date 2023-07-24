const express = require('express');
const DinamicaService = require('../services/DinamicaService');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('potentes/admin/dinamica/index', { layout: 'main-admin' });
});

router.get('/detail/:id', (req, res) => {
  let { id } = req.params
  res.render('potentes/admin/dinamica/detail', { layout: 'main-admin', data: { id: id } });
});

router.get('/getOne/:id', async (req, res, next) => {
  try {
    let { id } = req.params
    let data = await DinamicaService.getOne(id);
    res.status(200).json(data)

  } catch (error) {
    next(error)
  }
});

router.get('/getAll', async (req, res, next) => {
  try {
    let data = await DinamicaService.getAll();
    res.status(200).json(data)

  } catch (error) {
    next(error)
  }
});

router.post('/add', async (req, res, next) => {
  try {
    let { data } = req.body
    let dataResult = await DinamicaService.add(data);
    res.status(200).json(dataResult)

  } catch (error) {
    next(error)
  }
});

router.post('/edit/:id', async (req, res, next) => {
  try {
    let { id } = req.params
    let { data } = req.body
    let dataResult = await DinamicaService.edit(id, data);
    res.status(200).json(dataResult)

  } catch (error) {
    next(error)
  }
});

router.get('/remove/:id', async (req, res, next) => {
  try {
    let { id } = req.params
    let dataResult = await DinamicaService.remove(id);
    res.status(200).json(dataResult)
  } catch (error) {
    next(error)
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const ClienteService = require('../services/ClienteService');

router.get('/', (req, res) => {
  res.render('potentes/admin/cliente/index', {  });
});


router.get('/getOne/:id', async (req, res, next) => {
  try {
    let { id } = req.params
    let data = await ClienteService.getOne(id);
    res.status(200).json(data)
    
  } catch (error) {
    next(error)
  }
});

router.get('/getAll', async (req, res, next) => {
  try {
    let data = await ClienteService.getAll();
    res.json(data)
    
  } catch (error) {
    next(error)
  }
});

router.post('/add', async (req, res, next) => {
  try {
    let data  = req.body
    let dataResult = await ClienteService.add(data);
    res.json(dataResult)
    
  } catch (error) {
    next(error)
  }
});

router.post('/edit/:id', async (req, res, next) => {
  try {
    let { id } = req.params
    let  data  = req.body
    let dataResult = await ClienteService.edit(id, data);
    res.json(dataResult)
    
  } catch (error) {
    next(error)
  }
});

router.get('/remove/:id', async (req, res, next) => {
  try {
    let { id } = req.params
    let dataResult = await ClienteService.remove(id);
    res.json(dataResult)
    
  } catch (error) {
    next(error)
  }
});
module.exports = router;

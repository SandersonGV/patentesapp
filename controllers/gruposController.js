const express = require('express');
const GrupoService = require('../services/GrupoService');
const router = express.Router();

router.get('/', async (req, res) => {
  res.render('potentes/grupo/index', {});
});

router.get('/detail/:grupoId', async (req, res) => {
  let { grupoId } = req.params
  res.render('potentes/grupo/detail', { grupoId });
});

router.post('/addGrupo', async (req, res, next) => {
  try {
    let { data } = req.body
    let grupo = await GrupoService.add(data);
    res.json(grupo)
    
  } catch (error) {
    next(error)
  }
});

router.post('/edit/:grupoId', async (req, res, next) => {
  try {
    let { grupoId } = req.params
    let  data  = req.body
    let dataResult = await GrupoService.edit(grupoId, data);
    res.json(dataResult)
    
  } catch (error) {
    next(error)
  }
});

router.get('/remove/:grupoId', async (req, res, next) => {
  try {
    let { grupoId } = req.params
    let resultdata = await GrupoService.remove(grupoId);
    res.json(resultdata)
    
  } catch (error) {
    next(error)
  }
});

router.get('/getOne/:grupoId', async (req, res, next) => {
  try {
    let { grupoId } = req.params
    let data = await GrupoService.getOne(grupoId);
    res.status(200).json(data)
    
  } catch (error) {
    next(error)
  }
});

router.get('/getAll', async (req, res, next) => {
  try {
    let data = await GrupoService.getAll();
    res.json(data)
    
  } catch (error) {
    next(error)
  }
});

module.exports = router;

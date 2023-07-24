const express = require('express');
const ParticipanteService = require('../services/ParticipanteService');
const AnaliseService = require('../services/AnaliseService');
const router = express.Router();


router.get('/detail/:participanteId', async (req, res, next) => {
  try {
    let { participanteId } = req.params
    res.render('potentes/participante/index', { participanteId });

  } catch (error) {
    res.render('pageNotFound');
  }
});

router.get('/getAnalise', async (req, res, next) => {
  try {
    let data = await AnaliseService.getAll();
    res.json(data)
  } catch (error) {
    next(error)
  }
});

router.get('/remove/:grupoId/:participanteId', async (req, res, next) => {
  try {
    let { participanteId } = req.params
    let resultdata = await ParticipanteService.remove(participanteId);
    res.json(resultdata)
  } catch (error) {
    next(error)
  }
});

router.post('/add/:grupoId', async (req, res, next) => {
  try {
    let { grupoId } = req.params
    let { data } = req.body
    let resultdata = await ParticipanteService.add(grupoId, data);
    res.json(resultdata)
  } catch (error) {
    next(error)
    
  }
});

router.get('/getAll/:grupoId', async (req, res, next) => {
  try {
    let { grupoId } = req.params
    let data = await ParticipanteService.getAll(grupoId)
    res.json(data)
  } catch (error) {
    next(error)
    
  }
});

router.get('/getOne/:participanteId', async (req, res, next) => {
  try {
    let { participanteId } = req.params
    let data = await ParticipanteService.getOneById(participanteId)
    res.json(data)
  } catch (error) {
    next(error)
    
  }
});

module.exports = router;

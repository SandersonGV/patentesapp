const express = require('express');
const ParticipanteService = require('../services/ParticipanteService');
const RespostaService = require('../services/RespostaService');
const AnaliseService = require('../services/AnaliseService');
const router = express.Router();


router.get('/detail/:participanteId', async (req, res) => {
  let { participanteId } = req.params
  res.render('potentes/participante/index', { participanteId });
});

router.get('/getAnalise', async (req, res) => {
  let data = await AnaliseService.getAll();
  res.json(data)
});

router.get('/remove/:grupoId/:participanteId', async (req, res) => {
  let { grupoId,participanteId } = req.params
  let resultdata = await ParticipanteService.removeParticipante(grupoId,participanteId);
  res.json(resultdata)
});

router.post('/add/:grupoId', async (req, res) => {
  let { grupoId } = req.params
  let { data } = req.body
  let resultdata = await ParticipanteService.addParticipante(grupoId, data);
  res.json(resultdata)
});

router.get('/getAll/:grupoId', async (req, res) => {
  let { grupoId } = req.params
  let data = await ParticipanteService.getAll(grupoId)
  res.json(data)
});

router.get('/getOne/:participanteId', async (req, res) => {
  let { participanteId } = req.params
  let data = await ParticipanteService.getOneById(participanteId)
  data.respostas = await RespostaService.getOne(data.id)
  res.json(data)
});

module.exports = router;

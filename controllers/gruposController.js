const express = require('express');
const GrupoService = require('../services/GrupoService');
const ParticipanteService = require('../services/ParticipanteService');
const RespostaService = require('../services/RespostaService');
const router = express.Router();


router.get('/', async (req, res) => {
  res.render('potentes/grupo/index', {});
});

router.get('/detail/:grupoId', async (req, res) => {
  let { grupoId } = req.params
  res.render('potentes/grupo/detail', { grupoId });
});

router.post('/addGrupo', async (req, res) => {
let { data } = req.body
  let grupos = await GrupoService.AddGrupo(data);
  res.json(grupos)
});

router.get('/remove/:grupoId', async (req, res) => {
  let { grupoId } = req.params
  let resultdata = await GrupoService.removeGrupo(grupoId);
  res.json(resultdata)
});

router.get('/getOne/:grupoId', async (req, res) => {
  let { grupoId } = req.params
  let data = await GrupoService.getOne(grupoId);
  data.participantes = await ParticipanteService.getAll(grupoId)
  for (const participante of data.participantes) {
    let respostas = await RespostaService.getOne(participante.id)
    participante.respostas = respostas.respostas
  }
  res.json(data)
});

router.get('/getAll', async (req, res) => {
  let data = await GrupoService.getAll();
  for (const grupo of data) {
    grupo.participantes = await ParticipanteService.getAll(grupo.id)
  }
  res.json(data)
});

module.exports = router;

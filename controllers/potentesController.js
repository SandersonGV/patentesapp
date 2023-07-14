const express = require('express');
const GrupoService = require('../services/GrupoService');
const ParticipanteService = require('../services/ParticipanteService');
const DinamicaService = require('../services/DinamicaService');
const RespostaService = require('../services/RespostaService');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('potentes/index', {});
});

router.get('/grupo', async (req, res) => {
  res.render('potentes/grupo/index', {});
});

router.get('/grupo/detail/:grupoId', async (req, res) => {
  let { grupoId } = req.params
  res.render('potentes/grupo/detail', { grupoId });
});

router.post('/grupo/addGrupo', async (req, res) => {
let { data } = req.body
  let grupos = await GrupoService.AddGrupo(data);
  res.json(grupos)
});

router.get('/grupo/remove/:grupoId', async (req, res) => {
  let { grupoId } = req.params
  let resultdata = await GrupoService.removeGrupo(grupoId);
  res.json(resultdata)
});

router.post('/grupo/addParticipante/:grupoId', async (req, res) => {
  let { grupoId } = req.params
  let { data } = req.body
  let resultdata = await ParticipanteService.addParticipante(grupoId, data);
  res.json(resultdata)
});

router.get('/participante/remove/:grupoId/:participanteId', async (req, res) => {
  let { grupoId,participanteId } = req.params
  let resultdata = await ParticipanteService.removeParticipante(grupoId,participanteId);
  res.json(resultdata)
});

router.get('/participante/getAll/:grupoId', async (req, res) => {
  let { grupoId } = req.params
  let data = await await ParticipanteService.getAll(grupoId)
  res.json(data)
});

router.get('/grupo/getAll', async (req, res) => {
  let data = await GrupoService.getAll();
  for (const grupo of data) {
    grupo.participantes = await ParticipanteService.getAll(grupo.id)
  }
  res.json(data)
});

router.get('/grupo/getDinamicas', async (req, res) => {
  let data = await DinamicaService.getAll();
  res.json(data)
});

router.get('/grupo/getOne/:grupoId', async (req, res) => {
  let { grupoId } = req.params
  let data = await GrupoService.getOne(grupoId);
  data.participantes = await ParticipanteService.getAll(grupoId)
  for (const participante of data.participantes) {
    let respostas = await RespostaService.getOne(participante.id)
    participante.respostas = respostas.respostas
  }
  res.json(data)
});

router.get('/desafio/emgrupo/:grupoId', async (req, res) => {
  let { grupoId} = req.params
  let grupo = await GrupoService.getOne(grupoId);

  if (grupo) {
    res.render('potentes/desafio/emgrupo', { grupoId });
    return;
  }
  res.render('potentes/desafio/naoencontrado');
});

router.get('/desafio/:grupoId/:email', async (req, res) => {
  let { grupoId, email } = req.params
  let participante = await PotenteGrupoService.getParticipante(grupoId, email);

  if (participante) {
    res.render('potentes/desafio/index', { grupoId, email });
    return;
  }
  res.render('potentes/desafio/naoencontrado');
});

router.post('/desafio/addResposta/:grupoId/:email', async (req, res) => {
  let { grupoId, email } = req.params
  let { resposta } = req.body;
  try {
    await ParticipanteService.addResposta(grupoId, email, resposta);
    res.json({ sucess: true });
  } catch (error) {
    res.status(400).json("erro ao salvar");
  }
});

router.post('/desafio/addRespostaGrupo/:grupoId', async (req, res) => {
  let { participantes } = req.body;
  try {
    await RespostaService.addRespostaGrupo(participantes);
    res.json({ sucess: true });
  } catch (error) {
    res.status(400).json("erro ao salvar");
  }
});

router.get('/concluido', async (req, res) => {
  res.render('potentes/desafio/concluido');
});



module.exports = router;

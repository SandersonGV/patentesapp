const express = require('express');
const GrupoService = require('../services/GrupoService');
const ParticipanteService = require('../services/ParticipanteService');
const RespostaService = require('../services/RespostaService');
const router = express.Router();


router.get('/solo/:grupoId/:email', async (req, res) => {
  let { grupoId, email } = req.params
  let participante = await ParticipanteService.getOne(grupoId, email);

  if (participante) {
    res.render('potentes/desafio/index', { grupoId, email });
    return;
  }
  res.render('potentes/desafio/naoencontrado');
});

router.get('/emgrupo/:grupoId', async (req, res) => {
  let { grupoId} = req.params
  let grupo = await GrupoService.getOne(grupoId);

  if (grupo) {
    res.render('potentes/desafio/emgrupo', { grupoId });
    return;
  }
  res.render('potentes/desafio/naoencontrado');
});


router.post('/addResposta/:grupoId/:email', async (req, res) => {
  let { grupoId, email } = req.params
  let { resposta } = req.body;
  try {
    let participante = await ParticipanteService.getOne(grupoId, email);
    await RespostaService.addResposta(participante.id, resposta);
    res.json({ sucess: true });
  } catch (error) {
    res.status(400).json("erro ao salvar");
  }
});

router.post('/addRespostaGrupo/:grupoId', async (req, res) => {
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

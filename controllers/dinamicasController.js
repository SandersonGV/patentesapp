const express = require('express');
const DinamicaService = require('../services/DinamicaService');
const router = express.Router();

router.get('/getAll', async (req, res) => {
  let data = await DinamicaService.getAll();
  res.json(data)
});

module.exports = router;

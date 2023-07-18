const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('potentes/cliente/index');
});


module.exports = router;

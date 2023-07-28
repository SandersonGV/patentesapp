const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('potentes/cliente/index');
});

router.get('/admin/clintes', (req, res) => {
  res.render('potentes/admin/clientes/index', {  });
});


module.exports = router;

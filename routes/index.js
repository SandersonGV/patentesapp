const express = require('express');
const router = express.Router();

// Rota inicial
router.get('/', (req, res) => {
  res.render('potentes/index', {layout:'main-login'});
});



module.exports = router;

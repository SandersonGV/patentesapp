const express = require('express');
const router = express.Router();

// Rota inicial
router.get('/', (req, res) => {
  res.redirect('/potentes');
});



module.exports = router;

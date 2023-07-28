const express = require('express');
const router = express.Router();


router.get('/',  (req, res) => {
  res.render('potentes/index', {});
});

router.get('/dashboard', (req, res) => {
  res.render('potentes/admin/index', {});
});


module.exports = router;

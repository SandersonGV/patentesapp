const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('potentes/index', {layout:'main-login'});
});

router.post('/trylogin', (req, res) => {
  const {email,senha} = req.body
  let result = {redirect:"clientes"}
  if(email.includes("admin")){
    result.redirect = "/admin/dashboard"
  }
  res.send(result)
});

router.get('/dashboard', (req, res) => {
  res.render('potentes/admin/index', {layout:'main-admin'});
});


module.exports = router;

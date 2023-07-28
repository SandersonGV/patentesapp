const express = require('express');
const router = express.Router();
const UsuarioService = require('../services/UsuarioService');
const menuName = "Usuarios";

router.get('/', (req, res) => {
  res.render('potentes/admin/usuario/index', {  });
});


router.get('/getOne/:id', async (req, res, next) => {
  try {
    let { id } = req.params
    let data = await UsuarioService.getOne(id);
    if(data){
      delete data.password
    }
    res.status(200).json(data)
    
  } catch (error) {
    next(error)
  }
});

router.get('/getAll', async (req, res, next) => {
  try {
    let data = await UsuarioService.getAll();
    res.json(data)
    
  } catch (error) {
    next(error)
  }
});

router.post('/add', async (req, res, next) => {
  try {
    let data  = req.body
    let dataResult = await UsuarioService.add(data);
    res.json(dataResult)
    
  } catch (error) {
    next(error)
  }
});

router.post('/edit/:id', async (req, res, next) => {
  try {
    let { id } = req.params
    let  data  = req.body
    let dataResult = await UsuarioService.edit(id, data);
    res.json(dataResult)
    
  } catch (error) {
    next(error)
  }
});

router.get('/remove/:id', async (req, res, next) => {
  try {
    let { id } = req.params
    let dataResult = await UsuarioService.remove(id);
    res.json(dataResult)
    
  } catch (error) {
    next(error)
  }
});
module.exports = router;

const express = require('express');
const router = express.Router();
const AdminService = require('../services/AdminService');
const { userAuth } = require("../middleware/auth.js");
const jwt = require('jsonwebtoken')
require('dotenv').config()
const { JWT_SECRET } = process.env

// Rota inicial
router.get('/', userAuth, (req, res) => {
  res.render('potentes/index', { layout: 'main-login' });
});

router.post('/trylogin', async (req, res, next) => {
  try {
    const { email, password } = req.body
    if (!email && !password) {
      return res.status(400).json({
        message: "Username or Password not present",
      })
    }

    let result = { redirect: "clientes" }
    let usuario = await AdminService.trylogin({ email, password });

    const maxAge = 3 * 60 * 60;
    const token = jwt.sign(
      {
        id: usuario.id,
        nome: usuario.nome,
        tipo: usuario.tipo,
        clienteId: usuario.clienteId
      },
      JWT_SECRET,
      {
        expiresIn: maxAge, // 3hrs in sec
      }
    );
    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: maxAge * 1000, // 3hrs in ms
    });

    if (usuario.tipo == 0) {
      result.redirect = "admin/dashboard"
    }

    result.user = {
      id: usuario.id,
      nome: usuario.nome,
      tipo: usuario.tipo,
      clienteId: usuario.clienteId
    }
    console.log(result)
    return res.status(200).json(result)

  } catch (error) {
    console.log(error)
    error.statusCode = error.response ? error.response.status : 500
    error.message = error.response ? error.response.statusText : ""
    next(error)
  }
});

router.get("/logout", (req, res) => {
  res.cookie("jwt", "", { maxAge: "1" })
  res.redirect("/")
})

module.exports = router;

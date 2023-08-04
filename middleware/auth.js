const jwt = require('jsonwebtoken')
require('dotenv').config()
const { JWT_SECRET } = process.env
const tipoUser = [0, 1, 2]
const { menuList } = require("../repository/potentesdb")


const userAuth = (req, res, next) => {
    const token = req.cookies.jwt
    if (token) {
        jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
            if (err) {
                return res.render('potentes/index', { layout: 'main-login' });
            } else {
                const menu = menuList.filter(o => o.tipo.includes(decodedToken.tipo))
                for (const m of menu) {
                    m.isActive = req.originalUrl.includes(m.url)
                }
                res.locals.menu = menu;
                res.locals.user = decodedToken;
                res.locals.user.isAdmin = decodedToken.tipo==1;

                if (!tipoUser.includes(decodedToken.tipo) || req.originalUrl == "/") {
                    let redirect = "/clientes"
                    if (decodedToken.tipo == 0) {
                        redirect = "/admin/dashboard"
                    } 

                    return res.redirect(redirect)
                } else {
                    next()
                }
            }
        })
    } else {
        return res.render('potentes/index', { layout: 'main-login' });
    }
}

module.exports = { userAuth }
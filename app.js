// Importe os módulos necessários
const express = require('express');
const exphbs = require('express-handlebars');

// Crie o aplicativo Express
const app = express();

app.use(express.json());             // for application/json
app.use(express.urlencoded({ extended: false }));

// Configurar o mecanismo de template Handlebars
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// Importar rotas e controladores
const indexRouter = require('./routes/index');
const gruposController = require('./controllers/gruposController');
const desafiosRespostaController = require('./controllers/desafiosRespostaController');
const adminController = require('./controllers/adminController');
const participantesController = require('./controllers/participantesController');
const dinamicasController = require('./controllers/dinamicasController');
const desafiosController = require('./controllers/desafiosController');
const jogosController = require('./controllers/jogosController');
const clientesController = require('./controllers/clientesController');

// Configurando o middleware para servir arquivos estáticos na pasta "public"
app.use(express.static('public'));

// Configurar rotas
app.use('/', indexRouter);
app.use('/grupos', gruposController);
app.use('/participantes', participantesController);
app.use('/desafios', desafiosRespostaController);
app.use('/dinamicas', dinamicasController);
app.use('/clientes', clientesController);

app.use('/admin', adminController);
app.use('/admin/dinamicas', dinamicasController);
app.use('/admin/jogos', jogosController);
app.use('/admin/desafios', desafiosController);

//error handling
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

// Iniciar o servidor
const port = 3000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

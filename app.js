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
const desafiosController = require('./controllers/desafiosController');
const adminController = require('./controllers/adminController');
const participantesController = require('./controllers/participantesController');
const dinamicasController = require('./controllers/dinamicasController');
const clientesController = require('./controllers/clientesController');

// Configurar rotas
app.use('/', indexRouter);
app.use('/grupos', gruposController);
app.use('/participantes', participantesController);
app.use('/desafios', desafiosController);
app.use('/dinamicas', dinamicasController);
app.use('/admin', adminController);
app.use('/clientes', clientesController);

// Iniciar o servidor
const port = 3000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

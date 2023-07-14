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
const potentesController = require('./controllers/potentesController');

// Configurar rotas
app.use('/', indexRouter);
app.use('/potentes', potentesController);

// Iniciar o servidor
const port = 3000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

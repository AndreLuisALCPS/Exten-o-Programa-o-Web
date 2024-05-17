const express = require('express');
const mustacheExpress = require('mustache-express');
const path = require('path');

const app = express();
const PORT = 3000;

// Configurar Mustache como motor de templates
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'views'));

// Servir arquivos estáticos (Bootstrap CSS)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/cadastro', (req, res) => {
  res.render('cadastro');
});

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/compra', (req, res) => {
  res.render('compra');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.get('/schools', async (req, res) => {
  const schools = await prisma
    .school
    .findMany();

  res.json(schools);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

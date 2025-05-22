const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/proxy-n8n', async (req, res) => {
  try {
    const response = await fetch('https://apiryan.reffix.com.br/webhook/quizGessica', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });
    const data = await response.text();
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send('Erro ao enviar para n8n');
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Proxy rodando na porta', PORT);
});

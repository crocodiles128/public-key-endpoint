const express = require('express');
const app = express();

// Configurar sua chave pública e data de criação
const publicKey = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtxowQV7w32g+MEHMKqckUB51qpI752qY53KbN2sQ6RvT4XlegajEaFwCKejUlwAcV6COV2q7AlpHl02DPOBg98mIVFveEwZuJstfV7tV5YNo2Cie2enQ7NhK7sklxfH+7M0kh6PgeT+F+aeDS/wLMKVByLHHO8EvH6qN2RDgAe9jjC49rhh51MJa3QpfgiDkqS9Cr1e+YaNm6uuMkc0Ia2VDaTDB6RcH1MLOj9F7UrDNdP3SujBN8QjFNhFGj8UGhoBNavoGcHi4iUS3SKVkZpK+KShLBgVQ4gDQeLSGkiQGFUnMnKxbcftHCxW3/7URpNy3aid8DMcp48gOLgph/QIDAQAB";
const createdAt = "1737243175322";

// Endpoint público
app.get('/public-key', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({ publicKey, createdAt });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

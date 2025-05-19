import express from 'express';

const app = express();

const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hola');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})

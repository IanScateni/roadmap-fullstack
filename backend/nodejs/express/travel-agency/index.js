import express from 'express';
import router from "./routes/index.js";

const app = express();

const port = process.env.PORT || 4000;

//Habilitar PUG
app.set('view engine', 'pug');

// Definir la carpeta publica
app.use(express.static('public'))

app.use('/', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})



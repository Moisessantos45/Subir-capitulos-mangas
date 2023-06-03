import express from 'express';
import router from './routes/index.js';
import multer from 'multer';

const app = express();
const port = process.env.PORT || 4000;

app.set('view engine', 'pug');
//funcion para leer los datos del formulario
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"))
app.use('/contenido', express.static('contenido'));
app.use("/", router);
app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto ${port}`);
});
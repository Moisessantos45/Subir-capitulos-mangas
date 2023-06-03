import fs from "fs";
const cambiarRuta = (req, res) => {
    let carpetaActual = req.body.ruta;
    const accion = req.body.accion;
    console.log("carpeta actual", carpetaActual)
    let primeraCarpeta;
    let mostrarRetroceder = true;
    let mostrarAvanzar = true;

    const listaCarpetas = fs.readdirSync("./contenido/imagenes");
    const indiceCarpetaActual = listaCarpetas.indexOf(carpetaActual);

    if (accion === "retroceder") {
        if (indiceCarpetaActual > 0) {
            primeraCarpeta = listaCarpetas[indiceCarpetaActual - 1];
        } else {
            primeraCarpeta = carpetaActual;
            mostrarRetroceder = false;
        }
    } else if (accion === "avanzar") {
        if (indiceCarpetaActual < listaCarpetas.length - 1) {
            primeraCarpeta = listaCarpetas[indiceCarpetaActual + 1];
        } else {
            primeraCarpeta = carpetaActual;
            mostrarAvanzar = false;
        }
    }

    const listaImagenes = fs.readdirSync(`./contenido/imagenes/${primeraCarpeta}`);
    res.render("subir", { pagina: "subir", listaImagenes, primeraCarpeta,mostrarRetroceder, mostrarAvanzar });
};

export {
    cambiarRuta
}
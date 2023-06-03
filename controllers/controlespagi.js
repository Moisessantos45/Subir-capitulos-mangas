import fs from "fs";
import path from "path";
const paginaInicio = (req, res) => {
    res.redirect("https://underwordliellanovels.herokuapp.com/")
}

const paginaManga=(req,res)=>{   
    res.render("SUBIR_CAPITULO",{
        pagina:"SUBIR_CAPITULO",
    })
}

const paginaSubir = (req, res) => {
    const listaCarpetas = fs.readdirSync("./contenido/imagenes");
    const primeraCarpeta = listaCarpetas[0];
    const listaImagenes = fs.readdirSync(`./contenido/imagenes/${primeraCarpeta}`);
    const mostrarRetroceder = false;
    const mostrarAvanzar = listaCarpetas.length > 1;
    res.render("subir", { pagina: "subir", listaImagenes, primeraCarpeta,mostrarRetroceder, mostrarAvanzar });
};

const paginaHeroine=(req,res)=>{   
    res.render("HEROINE",{
        pagina:"HEROINE",
    })
}

const HEROINE_Capitulos=(req,res)=>{
    const listaCarpetas = fs.readdirSync("./contenido/Heroine");
    const primeraCarpeta = listaCarpetas[0];
    const listaImagenes = fs.readdirSync(`./contenido/Heroine/${primeraCarpeta}`);
    const mostrarRetroceder = false;
    const mostrarAvanzar = listaCarpetas.length > 1;
    console.log("Boton de avanzar",mostrarAvanzar)
    res.render("HEROINE_CAPI",{
        pagina:"HEROINE_CAPI",
        listaCarpetas,
        primeraCarpeta,
        listaImagenes,
        mostrarRetroceder,
        mostrarAvanzar
    })
}

const paginaMicchaku=(req,res)=>{
    res.render("MICCHAKU",{
        pagina: "MICCHAKU",
    })
}

const MICCHAKU_Capitulos=(req,res)=>{
    const listaCarpetas = fs.readdirSync("./contenido/Micchaku");
    const primeraCarpeta = listaCarpetas[0];
    const listaImagenes = fs.readdirSync(`./contenido/Micchaku/${primeraCarpeta}`);
    const mostrarRetroceder = false;
    const mostrarAvanzar = listaCarpetas.length > 1;
    res.render("MICCHAKU_CAPI",{
        pagina: "MICCHAKU_CAPI",
        listaCarpetas,
        primeraCarpeta,
        listaImagenes,
        mostrarRetroceder,
        mostrarAvanzar
    })
}


const charHazukashigariya=(req,res)=>{
    const listaCarpetas = fs.readdirSync("./contenido/Hazukashigariya");
    const primeraCarpeta = listaCarpetas[0];
    const listaImagenes = fs.readdirSync(`./contenido/Hazukashigariya/${primeraCarpeta}`);
    const mostrarRetroceder = false;
    const mostrarAvanzar = listaCarpetas.length > 1;
    res.render("HAZUKASHIGARIYA_CAPI",{
        pagina: "HAZUKASHIGARIYA_CAPI",
        listaCarpetas,
        primeraCarpeta,
        listaImagenes,
        mostrarRetroceder,
        mostrarAvanzar
    })
}


export {
    paginaInicio,
    paginaSubir,
    paginaHeroine,
    paginaMicchaku,
    HEROINE_Capitulos,
    MICCHAKU_Capitulos,
    paginaManga,
    charHazukashigariya
}
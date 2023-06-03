import express from 'express';
import { paginaInicio,paginaSubir,paginaHeroine,paginaMicchaku,HEROINE_Capitulos,MICCHAKU_Capitulos,
paginaManga,charHazukashigariya 
} from '../controllers/controlespagi.js';
import { subirContenido } from '../models/subir.js';
import { cambiarRuta } from '../models/cambiar_ruta.js';
import { cambiarRuta2 } from '../models/cambiar_ruta2.js';
import { cambiarRuta3 } from '../models/cambiar_ruta3.js';
import {cambiarRuta4} from "../models/cambiar_ruta4.js"

const router = express.Router();

router.get("/",paginaInicio)

router.get("/SUBIR_CAPITULO",paginaManga)
router.post("/SUBIR_CAPITULO",subirContenido)

router.get("/subir",paginaSubir)
router.post("/subir",cambiarRuta)

router.get("/HEROINE",paginaHeroine)
router.get("/HEROINE_CAPI",HEROINE_Capitulos)
router.post("/HEROINE_CAPI",cambiarRuta2)

router.get("/MICCHAKU",paginaMicchaku)

router.get("/MICCHAKU_CAPI",MICCHAKU_Capitulos)
router.post("/MICCHAKU_CAPI",cambiarRuta3)

router.get("/HAZUKASHIGARIYA_CAPI",charHazukashigariya)
router.post("/HAZUKASHIGARIYA_CAPI",cambiarRuta4)

 export default router;
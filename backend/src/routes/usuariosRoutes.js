import { Router } from "express"
import { usuariosController } from "../controllers/usuariosController.js"

const router = Router()

router.get('/avaliacoes', usuariosController.getAll);
router.get('/avaliacoes/:id', usuariosController.get);
router.post('/avaliacoes', usuariosController.create);
router.put('/avaliacoes/:id', usuariosController.update);
router.delete('/avaliacoes/:id', usuariosController.delete);
export default router
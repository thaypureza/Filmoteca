import { Router } from "express"
import { avaliacoesController } from "../controllers/avaliacoesController.js"

const router = Router()

router.get('/avaliacoes', avaliacoesController.getAll);
router.get('/avaliacoes/:id', avaliacoesController.get);
router.post('/avaliacoes', avaliacoesController.create);
router.put('/avaliacoes/:id', avaliacoesController.update);
router.delete('/avaliacoes/:id', avaliacoesController.delete);
export default router
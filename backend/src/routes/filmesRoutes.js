import { Router } from "express"
import { filmesController } from "../controllers/filmesController.js"

const router = Router()

router.get('/filmes', filmesController.getAll);
router.get('/filmes/:id', filmesController.get);
export default router
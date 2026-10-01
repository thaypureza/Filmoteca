import { filmesService } from "../services/filmesService.js"

export const filmesController = {
    async getAll(req, res) {
        try {
            const filmes = await filmesService.getAllFilmes() 
            res.json(filmes);
        } catch (error) {
            res.status(404).json({ erro: error.message });
        }
    },

    async get(req, res) {
        try {
            const filme = await filmesService.getFilmeById(req.params.id);
            res.json(filme);
        } catch (error) {
            res.status(404).json({ erro: error.message });
        }
    },

}
import { filmesRepository } from "../repositories/filmesRepository.js";

export const filmesService = {
    async getAllFilmes() {
        return await filmesRepository.findAll();
    },

    async getFilmeById(id) {
         const filmeExistente = await filmesRepository.findById(id);
        if (!filmeExistente) {
            throw new Error("Filme não encontrado");
        }
        return filmeExistente;
    }

}
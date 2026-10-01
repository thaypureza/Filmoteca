import { avaliacoesRepositoryRepository } from "../repositories/avaliacoesRepository.js";

export const avaliacoesService = {
    async getAllAvaliacoes() {
        return await avaliacoesRepository.findAll();
    },

    async getAvaliacaoById(id) {
         const avaliacaoExistente = await avaliacoesRepository.findById(id);
        if (!avaliacaoExistente) {
            throw new Error("Avaliação não encontrada");
        }
        return avaliacaoExistente;
    },
    
    async createAvaliacao(avaliacaoRequisicao) {
        if (avaliacaoRequisicao.nota < 0 || avaliacaoRequisicao.nota > 5) {
            throw new Error("A nota da avaliação deve estar entre 0 e 5.");
        }
        return await avaliacoesRepository.create(avaliacaoRequisicao);
    },

    async updateAvaliacao(id, avaliacaoRequisicao) {
        const avaliacaoExistente = await avaliacoesRepository.findById(id);
        if (!avaliacaoExistente) {
            throw new Error("Avaliação não encontrada");
        }
            return await avaliacoesRepository.update(id, avaliacaoRequisicao);

        },

    async deleteAvaliacao(id) {
        const avaliacaoExistente = await avaliacoesRepository.findById(id);
        if (!avaliacaoExistente) {
            throw new Error("Avaliação não encontrada");
        }
        return await avaliacoesRepository.delete(id);
    }
}
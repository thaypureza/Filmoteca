import { avaliacoesService } from "../services/avaliacoesService.js"

export const avaliacoesController = {
    async getAll(req, res) {
        try {
            const avaliacoes = await avaliacoesService.getAllAvaliacoes()
            res.json(avaliacoes);
        } catch (error) {
            res.status(404).json({ erro: error.message });
        }
    },

    async get(req, res) {
        try {
            const avaliacao = await avaliacoesService.getAvaliacaoById(req.params.id);
            res.json(avaliacao);
        } catch (error) {
            res.status(404).json({ erro: error.message });
        }
    },

    async get(req, res) {
        try {
            const avaliacoes = await avaliacoesService.getAvaliacaoById(req.params.id);
            res.json(avaliacoes);
        } catch (error) {
            res.status(404).json({ erro: error.message });
        }
    },

    async create(req, res) {
    try {
            const novaAvaliacao = await avaliacoesService.createAvaliacao(req.body);
            res.status(201).json(novaAvaliacao);
        } catch (error) {
            res.status(400).json({ erro: error.message });
        }
    },

    async update(req, res) {
        try {
            const avaliacaoAtualizada = await avaliacoesService.updateAvaliacao(req.params.id, req.body);
            res.json(avaliacaoAtualizada);
        } catch (error) {
           const status = error.message === "Avaliação não encontrada" ? 404 : 400;
            res.status(status).json({ erro: error.message });
        }
    },

    async delete(req, res) {
        try {
            const avaliacaoRemovida = await avaliacoesService.deleteAvaliacao(req.params.id);
            res.json({
                mensagem: `Avaliação removida com sucesso: {${avaliacaoRemovida.nome}}`
            });
        } catch (error) {
            const status = error.message === "Avaliação não encontrada" ? 404 : 400;
            res.status(status).json({ erro: error.message });
        }
    }
}    
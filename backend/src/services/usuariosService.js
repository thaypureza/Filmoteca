import { usuariosRepository } from "../repositories/usuariosRepository.js";

export const usuariosService = {
    async getAllUsuarios() {
        return await usuariosRepository.findAll();
    },

    async getUsuarioById(id) {
         const usuarioExistente = await usuariosRepository.findById(id);
        if (!usuarioExistente) {
            throw new Error("Usuário não encontrado");
        }
        return usuarioExistente;
    },
    
    async createUsuario(usuarioRequisicao) {
        if (usuarioRequisicao.nome) {
            throw new Error("O nome do usuário é obrigatório.");
        }
        return await usuariosRepository.create(usuarioRequisicao);
    },

    async updateUsuario(id, usuarioRequisicao) {
        const usuarioExistente = await usuariosRepository.findById(id);
        if (!usuarioExistente) {
            throw new Error("Usuário não encontrado");
        }
            return await usuariosRepository.update(id, usuarioRequisicao);

        },

    async deleteUsuario(id) {
        const usuarioExistente = await usuariosRepository.findById(id);
        if (!usuarioExistente) {
            throw new Error("Usuário não encontrado");
        }
        return await usuariosRepository.delete(id);
    }
}
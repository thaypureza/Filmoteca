import { usuariosService } from "../services/usuariosService.js"

export const usuariosController = {
    async getAll(req, res) {
        try {
            const usuarios = await usuariosService.getAllUsuarios() 
            res.json(usuarios);
        } catch (error) {
            res.status(404).json({ erro: error.message });
        }
    },

    async get(req, res) {
        try {
            const usuario = await usuariosService.getUsuarioById(req.params.id);
            res.json(usuario);
        } catch (error) {
            res.status(404).json({ erro: error.message });
        }
    },

    async create(req, res) {
    try {
            const novoUsuario = await usuariosService.createUsuario(req.body);
            res.status(201).json(novoUsuario);
        } catch (error) {
            res.status(400).json({ erro: error.message });
        }
    },

    async update(req, res) {
        try {
            const usuarioAtualizado = await usuariosService.updateUsuario(req.params.id, req.body);
            res.json(usuarioAtualizado);
        } catch (error) {
           const status = error.message === "Usuário não encontrado" ? 404 : 400;
            res.status(status).json({ erro: error.message });
        }
    },

    async delete(req, res) {
        try {
            const usuarioRemovido = await usuariosService.deleteUsuario(req.params.id);
            res.json(
            mensagem = `Usuário removido com sucesso: {${usuarioRemovido.nome}}`
        );
            
        }
        catch (error) {
            const status = error.message === "Usuário não encontrado" ? 404 : 400;
            res.status(status).json({ erro: error.message });
        }
    }
}    
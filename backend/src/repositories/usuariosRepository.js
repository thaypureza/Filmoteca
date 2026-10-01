import { query } from "../config/db.js";

export const usuariosRepository = {
    async findAll() {
        const res = await query("SELECT * FROM usuario ORDER BY id;");
        return res.rows;
    },

    async create(usuario) {
        const { nome, email, senha } = usuario;
        const sql = 'INSERT INTO usuario (nome, email, senha) VALUES ($1, $2, $3) RETURNING *;';
        const res = await query (sql, [nome, email, senha]);
        return res.rows[0];

    },

    async findById(id) {
        const res = await query ('SELECT * FROM usuario WHERE id = $1;',[id]);
        return res.rows[0];
    },

    async update(id, usuario) {
        const { nome, email, senha } = usuario;
        const sql = 'UPDATE usuario SET nome = $1, email = $2, senha = $3 WHERE id = $4 RETURNING *;';
        const res = await query(sql, [nome, email, senha, id]);
        return res.rows[0];
    },

    async delete(id) {
        const res = await query('DELETE FROM usuario WHERE id = $1 RETURNING *;', [id]);
        return res.rows[0];
    },
}
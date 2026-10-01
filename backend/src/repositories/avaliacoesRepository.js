import { query } from "../config/db.js";

export const avaliacoesRepository = {
    async findAll() {
        const res = await query("SELECT * FROM avaliacoes ORDER BY id;");
        return res.rows;
    },

    async create(avaliacao) {
        const { nota, comentario } = avaliacao;
        const sql = 'INSERT INTO avaliacoes (nota, comentario, usuario_id, filme_id) VALUES ($1, $2, $3, $4) RETURNING *;';
        const res = await query (sql, [nota, comentario]);
        return res.rows[0];

    },

    async findById(id) {
        const res = await query ('SELECT * FROM avaliacoes WHERE id = $1;',[id]);
        return res.rows[0];
    },

    async update(id, avaliacao) {
        const { nota, comentario } = avaliacao;
        const sql = 'UPDATE avaliacoes SET nota = $1, comentario = $2 WHERE id = $3 RETURNING *;';
        const res = await query(sql, [nota, comentario, id]);
        return res.rows[0];
    },

    async delete(id) {
        const res = await query('DELETE FROM avaliacoes WHERE id = $1 RETURNING *;', [id]);
        return res.rows[0];
    },
}
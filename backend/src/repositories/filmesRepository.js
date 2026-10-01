import { query } from "../config/db.js";

export const filmesRepository = {
    async findAll() {
        const res = await query("SELECT * FROM filmes ORDER BY id;");
        return res.rows;
    },

    async findById(id) {
        const res = await query ('SELECT * FROM filmes WHERE id = $1;',[id]);
        return res.rows[0];
    }
}
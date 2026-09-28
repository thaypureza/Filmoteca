CREATE TABLE public.usuarios
(
    id serial NOT NULL,
    nome character varying NOT NULL,
    senha character varying NOT NULL,
    email character varying NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE public.filmes
(
    id serial NOT NULL,
    titulo character varying NOT NULL,
    ano integer NOT NULL,
    genero character varying NOT NULL,
    PRIMARY KEY (id)
);


CREATE TABLE public.avaliacoes
(
    id serial NOT NULL,
    nota integer NOT NULL,
    comentario character varying NOT NULL,
    usuario_id integer NOT NULL,
    filme_id integer NOT NULL,
    PRIMARY KEY (id)
);

ALTER TABLE public.avaliacoes
    ADD FOREIGN KEY (usuario_id)
    REFERENCES public.usuarios (id)
    ON DELETE CASCADE;

ALTER TABLE public.avaliacoes
    ADD FOREIGN KEY (filme_id)
    REFERENCES public.filmes (id)
    ON DELETE CASCADE;


INSERT INTO usuarios (id, nome, email, senha) VALUES
(1, 'Ana Silva', 'ana@email.com', 'senha123'),
(2, 'Carlos Souza', 'carlos@email.com', 'senha456'),
(3, 'Beatriz Lima', 'beatriz@email.com', 'senha789');


INSERT INTO filmes (id, titulo, ano, genero) VALUES
(1, 'Inception', 2010, 'Ficção Científica'),
(2, 'The Godfather', 1972, 'Drama'),
(3, 'Interstellar', 2014, 'Ficção Científica'),
(4, 'Matrix', 1999, 'Ação');


INSERT INTO avaliacoes (id, nota, comentario, filme_id, usuario_id) VALUES
(1, 9.5, 'Filme mente-aberta incrível!', 1, 1), 
(2, 10.0, 'Uma obra-prima do cinema.', 2, 1), 
(3, 8.0, 'Muito bom, mas um pouco longo.', 1, 2),
(4, 9.0, 'Efeitos visuais e trilha sonora impecáveis.', 3, 3); 
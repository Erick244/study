INSERT INTO cidades (nome, area, estado_id)
VALUES
    ('Campinas', 795, 32),
    ('Niterói', 133.9, 26);

INSERT INTO cidades 
    (nome, area, estado_id)
VALUES 
    ('Caruaru', 920.6, (SELECT id from `estados` where sigla = 'PE'));

INSERT INTO cidades
    (nome, area, estado_id)
VALUES ('Juazeiro do Norte', 248.2, (select id from estados where sigla = 'CE'));
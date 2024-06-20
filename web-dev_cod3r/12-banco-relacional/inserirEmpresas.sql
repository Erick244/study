ALTER TABLE
    empresas
MODIFY
    cnpj VARCHAR(14);

INSERT INTO
    empresas (nome, cnpj)
VALUES
    ('Bradesco', 12345678901234),
    ('Vale', 22345678901234),
    ('Cielo', 32345678901234);


DESC empresas;

SELECT * FROM empresas;
SELECT * FROM cidades;

INSERT INTO empresas_unidades
    (empresa_id, cidade_id, sede)
VALUES
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1);


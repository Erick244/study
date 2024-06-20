CREATE TABLE IF NOT EXISTS empresas (
    id int UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    cnpj int UNSIGNED,
    PRIMARY KEY (id),
    UNIQUE KEY (cnpj)
);

CREATE TABLE IF NOT EXISTS empresas_unidades (
    empresa_id int UNSIGNED NOT NULL,
    cidade_id int UNSIGNED NOT NULL,
    sede TINYINT(1) NOT NULL,
    PRIMARY KEY (empresa_id, cidade_id)
);
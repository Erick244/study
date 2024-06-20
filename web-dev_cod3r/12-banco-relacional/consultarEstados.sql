SELECT * FROM estados

SELECT nome as 'Nome do Estado', sigla as 'Sigla do Estado' FROM estados
WHERE regiao = 'Sul'

SELECT nome, regiao FROM estados
WHERE populacao >= 10
ORDER BY populacao desc
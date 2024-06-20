SELECT 
    e.nome as Estados,
    c.nome as Cidades,
    e.regiao as Região
from estados as e, cidades as c
where e.id = c.estado_id;

SELECT
    c.nome as Cidade,
    e.nome as Estados,
    e.regiao as Região
FROM estados e
INNER JOIN cidades c on e.id = c.estado_id;
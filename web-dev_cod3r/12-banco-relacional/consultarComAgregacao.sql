SELECT
    regiao as 'Região',
    sum(populacao) as Total
from estados
GROUP BY regiao
ORDER BY Total desc

SELECT
    avg(populacao) as Total
from estados
# Crie uma tupla preenchida com os 20 primeiros colocados da Tabela do Campeonato Brsileiro de Futebol,
# na ordem de colocaçao. Depois mostre:
# A) Apenas os 5 primeiros colocados.
# B) Os ultimos 4 colocados da tabela.
# C) Uma lista com os times em ordem alfabetica.
# D) Em que posiçao na tabela esta o time da Chapecoense

print(' - DESAFIO 073 - ')
times = ('Palmeiras', 'Cruzeiro', 'Grêmio', 'Santos', 'Corinthians', 'Flamengo', 'Atlético Mineiro',
         'Athletico Paranaense', 'Internacional', 'Chapecoense', 'Botafogo', 'São Paulo', 'Fluminense'
         'Vasco da Gama', 'Bahia', 'Sport', 'Vitória', 'Ponte Preta', 'América', 'Coritiba')

print('='*100)
print(f'> Lista de times do Brasileirao: {times}')
print('='*100)
print(f'> Os 5 primeiros sao: {times[:5]}')
print('='*100)
print(f'> Os 4 ultimos sao: {times[-4:]}')
print('='*100)
print(f'> Times em ordem alfabetica: {sorted(times)}')
print('='*100)
print(f'O Chapecoence esta na posiçao {times.index("Chapecoense")}')

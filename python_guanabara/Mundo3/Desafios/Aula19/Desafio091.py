# Crie um programa onde 4 jogadores joguem um dado e tenham resultados aleatorios.
# Guarde esses resultados em um dicionario.
# No final, coloque esse dicionario em ordem,
# sabendo que o vencedor tirou o maior numero no dado.

from operator import itemgetter
from time import sleep
from random import randint
print(' - DESAFIO 91 - ')
dado = {'Jogador_1': randint(1, 6),
        'Jogador_2': randint(1, 6),
        'Jogador_3': randint(1, 6),
        'Jogador_4': randint(1, 6)}
ranking = dict()
print('Resultados:')
for k, v in dado.items():
    sleep(0.8)
    print(f'{k} tirou: {v}')
ranking = sorted(dado.items(), key=itemgetter(1), reverse=True)
print()
print('-=Ranking=-')
for i, v in enumerate(ranking):
    sleep(0.5)
    print(f'{i+1} lugar: {v[0]} que tirou: {v[1]}')

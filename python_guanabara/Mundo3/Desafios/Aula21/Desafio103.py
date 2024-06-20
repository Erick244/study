# Faça um programa que tenha uma função chamada ficha(), que receba dois parâmetros opcionais:
# o nome de um jogador e quantos gols ele marcou.
# O programa deverá ser capaz de mostrar a ficha do jogador, mesmo que algum dado não tenha sido
# informado corretamente.

print(' - DESAFIO 103 - ')


def ficha(nome='', gols=False):
    if nome == '':
        global n
        n = '<desconhecido>'
    x = gols.isnumeric()
    if x == False:
        global g
        g = 0


# Programa Principal
print('-'*30)
n = str(input('Nome do Jogador: ')).title()
g = str(input('Numero de Gols: '))
ficha(nome=n, gols=g)
print(f'O jogador {n} fez {g} gol(s) no campeonato.')

# Crei um programa que gerencie o aproveitamento de um jogador de futebol.
# O programa vai ler o nome do jogador e quantas partidas ele jogou.
# Depois vai ler a quantidade de gols feitos em cada partida.
# No final, tudo isso sera gerado guardado em um dicionario,
# incluindo o total de gols feitos durante o campeonato.

print(' - DESAFIO 093 - ')
dados = {}
dados['Nome'] = str(input('Nome do jogador: ')).strip().title()
partidas = int(input(f'Quantas partidas {dados["Nome"]} jogou?: '))
gols = []
for c in range(partidas):
    gols.append(int(input(f'Quantos gols na partida {c+1}?: ')))
dados['Gols'] = gols[:]
dados['Total'] = sum(gols)
print('-'*30)
print(dados)
print('-'*30)
for k, v in dados.items():
    print(f'O campo {k} tem o valor {v}')
print('-'*30)
print(f'O jogador {dados["Nome"]} jogou {len(gols)} partidas.')
for c in range(partidas):
    print(f'> Na partida {c+1}, Fez {dados["Gols"][c]} gols')
print(f'Foi um total de {dados["Total"]} gols.')

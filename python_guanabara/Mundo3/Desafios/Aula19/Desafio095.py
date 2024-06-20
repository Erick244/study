# Aprimore o desafio 093 para que ele funcione com varios jogadores,
# incluindo um sistema de visualizaçao de detalhes do aproveitamento de cada jogador

print(' - DESAFIO 095 - ')
time = []
dados = {}
gols = []
while True:
    dados.clear()
    dados['Nome'] = str(input('Nome do jogador: ')).strip().title()
    partidas = int(input(f'Quantas partidas {dados["Nome"]} jogou?: '))
    gols.clear()
    for c in range(partidas):
        gols.append(int(input(f'Quantos gols na partida {c+1}?: ')))
    dados['Gols'] = gols[:]
    dados['Total'] = sum(gols)
    time.append(dados.copy())
    while True:
        print()
        deseja = str(input('Quer registrar outro? [S / N]: ')).upper()[0]
        print()
        if deseja in 'SN':
            break
        print('Erro. Digite apenas S ou N.')
    if deseja == 'N':
        break
print()
print('-' * 50)
print(f'{"Cod":<4}{"Nome":<20}{"Gols":<20}{"Tot":<20}')
print('-' * 50)
for i, v in enumerate(time):
    print(f'{i:<4}', end='')
    for d in v.values():
        print(f'{str(d):<20}', end='')
    print()
while True:
    print()
    busca = int(input('Qual jogador voce que analizar (-1 para FECHAR): '))
    print()
    if busca <= -1:
        break
    if busca >= len(time):
        print(f'Erro. Nao exixte jogador {busca}')
    else:
        print(f'> Levantamento do jogador {time[busca]["Nome"]}:')
        for i, g in enumerate(time[busca]['Gols']):
            print(f'> Na partida {i}, ele fez {g} gols')
print('Programa finalizado!')

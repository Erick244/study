# Faça um programa que leia nome e peso de varias pessoas, guardando tudo em uma lista.
# No final mostre:
# A) Quantas pessoas foram cadastradas.
# B) Uma listagem com as pessoas mais pessadas.
# C) Uma listagem com as pessoas mais leves.

print(' - DESAFIO 084 - ')
grupo = []
dados = []
maiorP = menorP = 0
while True:
    dados.append(str(input('Nome: ')).strip().title())
    dados.append(float(input('Peso: ')))
    if len(grupo) == 0:
        maiorP = dados[1]
        menorP = dados[1]
    else:
        if dados[1] > maiorP:
            maiorP = dados[1]
        if dados[1] < menorP:
            menorP = dados[1]
    grupo.append(dados[:])
    dados.clear()
    print()
    deseja = str(input('Que continuar? [S / N]: ')).strip()[0]
    print()
    if deseja in 'Nn':
        break
print(f'Ao total foram {len(grupo)} pessoas adiciondas!')
print(f'O maior peso foi {maiorP}Kg. Peso de: ', end='')
for i in grupo:
    if i[1] == maiorP:
        print(f'{i[0]} ', end='')
print(f'\nO menor peso foi {menorP}Kg. Peso de: ', end='')
for i in grupo:
    if i[1] == menorP:
        print(f'{i[0]} ', end='')

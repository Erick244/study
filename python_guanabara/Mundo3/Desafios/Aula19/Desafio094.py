# Crie um programa que leai nome, sexo e idade de varias pessoas, guardando os dados de cada pessoa
# em um dicionario e todos os dicionarios em uma lista.
# No final, mostre:
# A) Qauntas pessoas foram cadastradas
# B) A media de idade do grupo
# C) Uma lista com todas as mulheres
# D) Uma lista com todas as pessoas com idade acima da media.


print(' - DESAFIO 94 - ')
pessoa = {}
grupo = []
f = []
soma = 0
while True:
    pessoa.clear()
    pessoa['Nome'] = str(input('Nome: ')).title().strip()
    while True:
        pessoa['Sexo'] = str(input('Sexo? [M / F]: ')).upper()[0].strip()
        if pessoa['Sexo'] in 'MF':
            break
        print('Erro. Digite M ou F.')
    if pessoa['Sexo'] == 'F':
        f.append(pessoa['Nome'])
    pessoa['Idade'] = int(input('Idade: '))
    soma += pessoa['Idade']
    grupo.append(pessoa.copy())
    while True:
        deseja = str(
            input('Deseja registrara outra pessoa?[S / N]: ')).upper()[0].strip()
        if deseja in 'SN':
            break
        print('Erro. Digite S ou N.')
    if deseja == 'N':
        break
print()
print(f'Fora cadastradas {len(grupo)} pessoas')
media = soma / len(grupo)
print(f'A media de idade do grupo  e {media:.0f} anos')
print(f'As mulheres cadastradas foram: ', end='')
for i in f:
    print(f'{i}', end=', ')
print()
print('\nPessoas acima da media de idade:')
for i in grupo:
    if i['Idade'] > media:
        for k, v in i.items():
            print(f'{k}: {v}')
        print()

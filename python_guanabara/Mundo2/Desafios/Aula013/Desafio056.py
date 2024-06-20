# Desenvolva um programa que leia o nome, idade e sexo de 4 pessoas. No final do programa, mostre:
# A media de idade do grupo.
# Qaul o nome do homem mais velho.
# Quantas mulheres tem menos de 20 anos.

idadetot = 0
media = 0
maioridade = 0
nomevelho = ''
idademulheres = 0
print(' - DESAFIO 056 - ')
for p in range(1, 5):
    print('--- {} PESSOA ---'.format(p))
    nomes = str(input('Nome: ')).strip()
    idades = int(input('Idade: '))
    sexos = str(input('Sexo [M/F]: ')).strip()
    idadetot += idades
    if p == 1 and sexos in 'Mm':
        maioridade = idades
        nomevelho = nomes
    if sexos in 'Mm' and idades > maioridade:
        maioridade = idades
        nomevelho = nomes
    if sexos in 'Ff' and idades < 20:
        idademulheres += 1
media = idadetot / 4
print('A media de idade deste grupo e de ({:.0f}) anos'.format(media))
print('O homem mais velho e o ({}) e ele tem ({}) anos'.format(nomevelho, maioridade))
print('Exixte ({}) mulhere(s) com menos de 20 anos'.format(idademulheres))

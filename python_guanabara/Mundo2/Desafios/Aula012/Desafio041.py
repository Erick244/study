# A confederação nacional de natação precisa de um programa que leia o ano de nascimento de um atleta
# e mostre sua categoria, de acordo com a idade:
# - Ate 9 anos: MIRIM
# - Ate 14 anos: INFATIL
# - Ate 19 anos: JUNIOR
# - Ate 25 anos: SÊNIOR
# - Acima: MESTER

nascimento = int(input('Digite a data de nascimento do atleta: '))

idade = 2021 - nascimento

print(' - DESAFIO 041 - ')
if idade <= 9:
    print('Categoria: MIRIM')
elif idade <= 14:
    print('Categoria: INFANTIL')
elif idade <= 19:
    print('Categoria: JUNIOR')
elif idade == 25:
    print('Categoria: SÊNIOR')
else:
    print('Categoria: MASTER')
print('O atleta tem {} anos'.format(idade))

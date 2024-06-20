# Crie um programa que leia o nome completo de uma pessoa e mostre:
# O nome com todas as letras maiusculas
# O nome com todas minusculas
# Quantas letras ao todo (sem considerar espaços)]
# Quantas letras tem o primeiro nome.
nome = str(input('Digite seu nome completo: ')).strip()

print(' - DESAFIO 022 - \n'
      'O nome ({}) em maiusculo ficou: {}'.format(nome, nome.upper()))

print('O nome ({}) em minusculo ficou: {}'.format(nome, nome.lower()))

print('O nome ({}) sem considerar espaços tem {} letras'.format(
    nome, len(nome) - nome.count(' ')))

pn = nome.split()
print('Seu primeiro nome é ({}) e ele tem {} letras'.format(
    pn[0], nome.find(' ')))

# Crie um programa que leia o nome de uma pessoa e diga se ela tem "Silva" no nome.
nome = str(input('Digite seu nome: ')).strip()

print(' - DESAFIO 025 - \n'
      'O nome ({}) tem Silva?: {}'.format(
          nome.title(), 'SILVA' in nome.upper()))

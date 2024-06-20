# Crie um programa que leia um numero real quanquer pelo teclado e mostre na tela a sua porçao enteira.
from math import trunc

num = float(input('Digite um numero: '))

# Resultado:
print(' -  DESAFIO 016 - \n'
      'O seu numero ({}) arredondado ficou assim: {}'.format(num, trunc(num)))

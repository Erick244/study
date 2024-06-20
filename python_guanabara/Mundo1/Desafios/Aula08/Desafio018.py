# Faça um programa que leia um angulo qualquer e mostre na tela o valor do seno,
# Cosseno e tangente desse angulo.
from math import sin, cos, tan, radians
an = float(input('Digite o angulo: '))

# Vars:
seno = sin(radians(an))
cosseno = cos(radians(an))
tangente = tan(radians(an))

# Res:
print(' - DESAFIO 018 - \n'
      'O angulo {0} tem o SENO de {1:.2f}\n'
      'O angulo {0} tem o COSSENO de {2:.2f}\n'
      'O angulo {0} tem o TANGENTE de {3:.2f}'.format(an, seno, cosseno, tangente))

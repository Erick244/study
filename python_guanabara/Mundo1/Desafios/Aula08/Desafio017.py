# Faça um programa que leia o comprimento do cateto oposto e do cateto adjante de um triangulo retangulo,
# calcule e mostre o comprimento da hipotenusa.
from math import hypot
co = float(input('Digite o cateto oposto: '))
ca = float(input('Digite o cateto adjacente: '))

# Vareiabeis:
hip = hypot(co, ca)

# Resultados:
print(' - DESAFIO 017 - \n'
      'A hipotenusa vale: {:.2f}'.format(hip))

# Crie um programa que vai gerar cinco numeros aleatoris e colocar em uma TUpla.
# Depois disso, mostre a listagem de numeros gerados e tambem indique
# o menor e o maior valor que estao na tupla.
from random import randint

num = (randint(1, 10), randint(1, 10), randint(
    1, 10), randint(1, 10), randint(1, 10))
print(' - DESAFIO 074 - ')
print(f'Os valores sorteados foram: {num}')

print(f'O maior valor sorteado foi {max(num)}')
print(f'O menor valor sorteado foi {min(num)}')

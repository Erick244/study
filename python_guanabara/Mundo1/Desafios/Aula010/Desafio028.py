# Escreva um program que faça o computador ''pensar'' em um numero entre 0 e 5 e peça para o usuario
# tentar descobrir qual foi o numero escolhido pelo computador.
# O programa devera escrever na tela se o usuario venceu ou perdeu.

from random import randint
from time import sleep
print(' - Boa Sorte! - ')

chute = int(input('Chute um numero de 0 a 5: '))

num = randint(0, 5)

print('Processando...')

sleep(1)
print(' - DESAFIO 028 - ')
if chute == num:
    print('Parabens! voce acertou, o numero era {}!'.format(num))
else:
    print('Infelizmente voce errou, o numero era {}!'.format(num))

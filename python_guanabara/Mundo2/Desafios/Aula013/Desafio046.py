# Faça um programa que mostre na tela uma contagem regreciva para o estouro de fogos de artificio,
# indo de 10 ate 0, com uma pausa de 1 segundo entre eles.
from time import sleep

for c in range(10, -1, -1):
    sleep(1)
    print(c)
print('BOOOOM!!!')
print(' - DESAFIO 046 - ')

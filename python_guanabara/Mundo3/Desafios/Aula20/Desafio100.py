# Faça um programa que tenha uma lista chamda numeros e duas funçoes chamadas sorteia() e somaPar().
# A primeira funçao vai sortear 5 numeros e vai coloca-los dentro da lista e a
# segunda funçao vai mostrar a soma entre todos os valores PARES sorteados pela funçao anterior.
from random import randint
from time import sleep


print(' - DESFIO 100 - ')

# Criando funçoes


def sorteia(lst):
    for c in range(0, 5):
        lst.append(randint(1, 10))
    print('Sorteando 5 valores da lista: ', end='', flush=True)
    sleep(0.7)
    for i in lst:
        print(i, end=' ', flush=True)
        sleep(0.4)
    print('Pronto!')


def somaPar(lst):
    soma = 0
    for i in lst:
        if i % 2 == 0:
            soma += i
    print(f'Somando os valores pares de {lst}, temos {soma}')


# Chamando funçoes
numeros = []
sorteia(numeros)
somaPar(numeros)

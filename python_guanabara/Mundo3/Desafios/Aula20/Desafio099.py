# Faça um programa que tenha uma funçao chamada maior(),
# que recebera varios parametros com valores inteiros..
# Seu programa tem que analisar todos os valores e dizer qual deles e o maior.
from time import sleep

print(' - DESAFIO 099 - ')


def linha():
    print('-'*70)


def maior(*num):
    print('Analizando valores passados...')
    sleep(0.6)
    mai = 0
    tot = len(num)
    for i in num:
        print(i, end=' ', flush=True)
        sleep(0.4)
        if mai == 0:
            mai = i
        else:
            if i > mai:
                mai = i
    print(f'Foram informados {tot} valores ao todo')
    print(f'O maior valor foi {mai}')
    linha()


# Programa principal
linha()
maior(2, 4, 6, 7, 8, 1)
maior(6, 1, 3)
maior(9, 5)
maior(6)
maior()

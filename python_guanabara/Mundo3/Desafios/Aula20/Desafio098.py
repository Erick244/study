# Faça um programa que tenha uma funçao chamada contador(),
# que receba tres parametros: inicio, fim e passo e realize a contagem.
# Seu programa tem que realizar atraves da funçao criada:
# A) De 1 ate 10, de 1 em 1
# B) De 10 ate 0, de 2 em 2
# C) Uma contagem personalizada.
from time import sleep

print(' - DESAFIO 98 - ')


def linha():
    print('─' * 50)


def contador(i, f, p):
    if p < 0:
        p *= -1
    if p == 0:
        p += 1
    linha()
    print(f'Contagem de {i} ate {f} de {p} em {p}')
    sleep(1)
    if i < f:
        c = i
        while c <= f:
            print(f'{c}', end=' ', flush=True)
            sleep(0.5)
            c += p
        print('Fim')
    else:
        c = i
        while c >= f:
            print(f'{c}', end=' ', flush=True)
            sleep(0.5)
            c -= p
        print('Fim')


# Programa principal
contador(1, 10, 1)
contador(10, 0, 2)

# Personalizado
linha()
print('Agora e sua vez!, Personalize o contador!')
inicio = int(input('Inicio: '))
fim = int(input('Fim: '))
passo = int(input('Passo: '))
contador(inicio, fim, passo)

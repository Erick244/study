# Faça um programa que tenha uma funçao chamada area(), que receba as dimensoes de um terreno
# retangulo (largura e comprimento) e mostre a area do terreno.

print(' - DESAFIO 096 - ')


def lin():
    print('-'*50)


print('Controle de Terrenos')
lin()

larg = float(input('Largura [M]: '))
comp = float(input('Comprimento [M]: '))
lin()


def area(a, b):
    tot = a * b
    print(f'A area de um terreno {a} x {b} e de {tot}m.')
    lin()


area(larg, comp)

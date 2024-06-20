# Crie um programa que leia um numero inteiro e mostre na tela se ele e PAR ou IMPAR.

num = int(input('Digite um numero: '))

print(' - DESAFIO 30 - ')
if num % 2 == 0:
    print('O numero ({}) e par!'.format(num))
else:
    print('O numero ({}) e impar!'.format(num))

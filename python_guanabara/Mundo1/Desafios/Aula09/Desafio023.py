# Faça um programa que leia um numero de 0 a 9999 e mostre na tela cada um dos digitos separados.
num = int(input('Digite um numero de 0 a 9999: '))


print(' - DESAFIO 023 - \n'
      'Unidade: {0}\n'
      'Dezena: {1}\n'
      'Centena: {2}\n'
      'Milhar: {3}'.format(num // 1 % 10, num // 10 % 10, num // 100 % 10, num // 1000 % 10))

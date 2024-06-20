# Fala um programa que lia tres numeros e mostre qual e o maior e qual e o menor.
n1 = int(input('Digite um numero: '))
n2 = int(input('Digite mais um: '))
n3 = int(input('Digite o ultimo: '))

maior = n1
print(' - DESAFIO 033 - ')
if n2 > n1 and n2 > n3:
    maior = n2
if n3 > n1 and n3 > n2:
    maior = n3
print('O maior numero digitado foi {}'.format(maior))

menor = n1
if n2 < n1 and n2 < n3:
    menor = n2
if n3 < n2 and n3 < n1:
    menor = n3
print('O menor numero digitado foi {}'.format(menor))

# Escreva um programa que leia um numero n inteiro qualquer e mostre na tela os n primeiros elemetos
# de uma sequencia de fibonacci.
# ex: 0 - 1 - 1 - 2 - 3 - 5 - 8

print(' - DESAFIO 063 - ')
num = int(input('Quantos termos voce quer mostrar?: '))

t1 = 0
t2 = 1
print('{} - {}'.format(t1, t2), end='')
cont = 3
while cont <= num:
    t3 = t1 + t2
    print(' - {}'.format(t3), end='')
    t1 = t2
    t2 = t3
    cont += 1
print(' - Fim')

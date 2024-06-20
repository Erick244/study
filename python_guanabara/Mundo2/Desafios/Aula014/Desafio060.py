# Faça um ptrograma que leai um numero qaulquer e mostre o seu fatorial.
# EX: 5! = 5x4x3x2x1 = 120

# Versao While
print(' - DESAFIO 060 - ')
n = int(input('Digite um numero: '))
c = n
f = 1
print('Calculando {}! = '.format(n), end='')
while c > 0:
    print('{}'.format(c), end='')
    print(' x ' if c > 1 else ' = ', end='')
    f *= c
    c -= 1
print('{}'.format(f), end='')


# Versao FOR
'''num = int(input('Digite um numero: '))

f = 1
print('Calculando o fatorial de {}! x '.format(num), end='')
for c in range(num-1, 0, -1):
    print('{}'.format(c), end='')
    print(' x ' if c > 1 else ' = ', end='')
    f *= c
print('{}'.format(f))'''


# Versao otimizada
'''from math import factorial
num = int(input('Digite um numero: '))
f = factorial(num)
print(f)'''

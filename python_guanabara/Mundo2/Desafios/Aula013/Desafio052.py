# Faça um programa que leia um numero inteiro e diga se ele e ou nao um numero primo.

num = int(input('Digite um numero: '))

print(' - DESAFIO 052 - ')
total = 0
for c in range(1, num + 1):
    if num % c == 0:
        total += 1
        print('\033[32m', end=' ')
    else:
        print('\033[31m', end=' ')
    print('{} '.format(c), end=' ')
if total == 2:
    print('\n\033[mO numero {} e PRIMO'.format(num))
else:
    print('\n\033[mO numero {} nao e um numero PRIMO'.format(num))
print('\033[mO numero {} foi divisivel {} vezes'.format(num, total))

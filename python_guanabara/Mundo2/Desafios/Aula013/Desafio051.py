# Desenvolva um programa que leai o primeiro termo e a razao de uma PA.
# No final, mostre os 10 primeiros numeros dessa progressao.

pt = int(input('Digite o primeiro termo: '))
r = int(input('Digite a razao: '))

decimo = pt + (11 - 1) * r

print(' - DESAFIO 051 - ')
for c in range(pt, decimo, r):
    print(c, end=' - ')
print('Fim')

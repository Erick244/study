# Faça um programa que leia 5 valores numericos e guarde-os em uma lista.
# No final, mostre qual foi o maior e o menor valor digitado e as suas respectivas posiçoes na lista.

print(' - DESAFIO 078 - ')
numeros = []
mai = 0
men = 0
for c in range(0, 4):
    numeros.append(int(input(f'Digite um valor para a posiçao {c}: ')))
    if c == 0:
        mai = men = numeros[c]
    else:
        if numeros[c] > mai:
            mai = numeros[c]
        if numeros[c] < men:
            men = numeros[c]
print(f'A lista completa e: {numeros}')

print(
    f'O maior numero foi ({mai}) e ele aparece nas posiçoes: ', end='')
for p, v in enumerate(numeros):
    if v == mai:
        print(f'{p} , ', end='')
print()
print(f'O menor valor foi ({men}) e ele aparece nas posiçoes: ', end='')
for p, v in enumerate(numeros):
    if v == men:
        print(f'{p} , ', end='')
print()
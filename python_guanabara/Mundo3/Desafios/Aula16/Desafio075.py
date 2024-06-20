# Desenvolva um programa que leia quatro valores pelo teclado e guarde-os em uma tupla.
# No final mostre:
# A) Quantas vezes aparece o valor 9.
# B) Em  que posiçao foi digitado o primeiro valor 3.
# C) Quais foram os numeros pares.

tupla = (int(input('Digite um numero: ')), int(input('Digite outro numero: ')),
         int(input('Digite mais um numero: ')), int(input('Digite o ultimo numero: ')))
print(' - DESAFIO 075 - ')
print(f'Voce digitou os valores {tupla}')
print(f'O valor 9 apareceu {tupla.count(9)} vezes')

if 3 in tupla:
    print(f'O valor 3 apareceu na {tupla.index(3)+1}ª posiçao')
else:
    print('O valor 3 nao foi digitado')

print('Os valores pares digitados foram: ', end='')
for c in range(0, 4):
    if tupla[c] % 2 == 0:
        print(f'{tupla[c]} ', end='')

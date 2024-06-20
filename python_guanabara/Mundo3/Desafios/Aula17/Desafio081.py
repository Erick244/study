# Crie um programa que vai ler varios numeros e colocar em uma lista.
# Depois disso, mostre:
# A) Quantos numeros foram digitados.
# B) A lista de valores, ordenada de forma decrescente.
# C) Se o valor 5 foi digitado e esta ou nao na lista.

numeros = []

print(' - DESAFIO 081 - ')
while True:
    numeros.append(int(input('Digite um numero: ')))
    deseja = str(input('Deseja continuar? [S / N]: ')).upper()[0].strip()
    if deseja == 'N':
        print()
        break
print(f'Foram adicionados {len(numeros)} numeros nesta lista')
numeros.sort(reverse=True)
print(f'A lista de ordem decresente: {numeros}')
if 5 in numeros:
    print('O valor 5 foi digitado!')
else:
    print('O valor 5 nao foi digitado!')

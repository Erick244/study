# Crie um programa que vai ler varios numeros e colocar em uma lista.
# Depois disso, crie duas listas extras que vao conter apenas os valores pares e os valores impares
# digitados, respectivamente.
# Ao final, mostre o conteuso das tres listas geradas.

numeros = list()
par = list()
impar = list()

print(' - DESAFIO 082 - ')
while True:
    num = int(input('Digite um numero: '))
    numeros.append(num)
    if num % 2 == 0:
        par.append(num)
    else:
        impar.append(num)

    deseja = str(input('Deseja continuar? [S / N]: ')).upper()[0].strip()
    if deseja == 'N':
        print()
        break
print(f'A lista completa e: {numeros}')
print(f'A lista de pares e: {par}')
print(f'A lista de impares e: {impar}')

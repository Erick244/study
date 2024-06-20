# Faça um programa que mostre a tabuada de varios numeros, um de cada vez, para cada valor digitado
# pelo usuario. O programa sera interrompido quando o numero solicitado for negativo.

print(' - DESAFIO 067 - ')
cont = 0
prg = int(input('Quer ver a tabuada de qual valor?: '))
print()
while True:
    if prg <= -1:
        break
    cont += 1
    print(f'{prg} x {cont} = {prg*cont}')
    if cont == 10:
        cont = 0
        print()
        prg = int(input('Quer ver a tabuada de qual valor?: '))
        print()
print()
print('Programa tabuada encerrado. Volte sempre!')

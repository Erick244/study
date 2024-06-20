# Desenvolva um programa que leia o comprimento de tres retas e diga ao usuario se elas podem ou  nao
# formar um triangulo.

r1 = float(input('Digite o valor da primeira reta: '))
r2 = float(input('Digite o valor da segunda reta: '))
r3 = float(input('Digite o valor da terceira reta: '))

print(' - DESAFIO 035 - ')
if r1 < r2 + r3 and r2 < r1 + r3 and r3 < r1 + r2:
    print('Sim!, e possivel fazer um triangulo com estas medidas.')
else:
    print('Nao!, nao e possivel fazer um trinagulo com estas medidas')

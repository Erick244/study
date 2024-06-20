# Refaça o desafio 35 dos triangulos, acrescentando o recurso de nostrar que tipo
# de triangulo sera formado:
# - Equilatero: todos lados iguais
# - Isoceles: dois lados iguais
# - Escaleno: todos os lados diferentes
r1 = float(input('Digite o valor da primeira reta: '))
r2 = float(input('Digite o valor da segunda reta: '))
r3 = float(input('Digite o valor da terceira reta: '))

print(' - DESAFIO 035 - ')
if r1 < r2 + r3 and r2 < r1 + r3 and r3 < r1 + r2:
    print('Sim!, e possivel fazer um triangulo com estas medidas.')
    if r1 == r2 == r3:
        print('Este triangulo e um triangulo EQUILATERO!')
    elif r1 == r2 or r1 == r3 or r2 == r1 or r2 == r3 or r3 == r1 or r3 == r2:
        print('Este triangulo e um triangulo ISOSCELES!')
    elif r1 != r2 != r3 != r1:
        print('Este triangulo e um triangulo ESCALENO!')
else:
    print('Nao!, nao e possivel fazer um trinagulo com estas medidas')

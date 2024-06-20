# Crie um programa onde o usuario possa digitar sete valores numericos e cadastre-os em uma lista unica que
# mantenha separados os valores pares e impares.
# No final, mostre os valores pares e impares em ordem crescente.

print(' - DESAFIO 085 - ')
geral = [[], []]
for c in range(0, 7):
    num = int(input(f'Digite o {c+1}o numero: '))
    if num % 2 == 0:
        geral[0].append(num)
    else:
        geral[1].append(num)
geral[0].sort()
print(f'A lisata de PARES é: {geral[0]}')
geral[1].sort()
print(f'A lista de IMPARES é: {geral[1]}')

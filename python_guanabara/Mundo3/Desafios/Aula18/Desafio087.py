# Aprimore o desafio anterior, mostrando no final:
# A) A soma de todos os valores pares digitados.
# B) A soma dos valores da terceira coluna.
# C) O maior valor da segunda linha.

print(' - DESAFIO 087 - ')
geral = [[0, 0, 0],
         [0, 0, 0],
         [0, 0, 0]]
soma = soma3 = mai = 0
for l in range(0, 3):
    for c in range(0, 3):
        geral[l][c] = int(input(f'Digite um valor para [{l}-{c}]: '))
        if geral[l][c] % 2 == 0:
            soma += geral[l][c]
for l in range(0, 3):
    for c in range(0, 3):
        print(f'[{geral[l][c]:^5}]', end='')
    print()
for l in range(0, 3):
    soma3 += geral[l][2]
for c in range(0, 3):
    if c == 0:
        mai = geral[1][c]
    else:
        if geral[1][c] > mai:
            mai = geral[1][c]
print(f'A soma de todos os valores PARES é: {soma}')
print(f'A soma da terceira coluna é: {soma3}')
print(f'O maior numero da segunda linha é: {mai}')

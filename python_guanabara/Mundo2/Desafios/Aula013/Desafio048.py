# Faça um programa que calcule a soma entre todos os numeros impares que sao multiplos de tres
# e que se encontram no intervalo de 1 ate 500.

#print(' - DESAFIO 048 - ')
#total = 0
# for c in range(1, 501):
# if c % 2 > 0:
# if c % 3 == 0:
#total += c
#print('A soma de todos os numeros impares multiplos por 3 é: {}'.format(total))


# Versao otimizada
total = 0
cont = 0
for c in range(3, 501, 3):
    if c % 2 > 0:
        cont += 1
        total += c
print('O resultado da soma e: {} de {} valores'.format(total, cont))

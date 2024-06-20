# Desenvolva um programa que leia seis numeros inteiros e mostre a soma apenas daqueles que forem pares,
# Se o valor digitado for impar, desconsidere-o.
print(' - DESAFIO 050 - ')
total = 0
cont = 0
for c in range(1, 7):
    num = int(input('Digite o {} valor: '.format(c)))
    if num % 2 == 0:
        total += num
        cont += 1
print('Voce informou {} numero(s) PAR(ES) e a soma dele(s) foi: {}'.format(cont, total))

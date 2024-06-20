# Crie um programa que leia varios numeros inteiros pelo teclado. No final da execuçao,
# mostre a media entre todos os valores e qual foi o maior e o menor valores lidos.
# O programa deve perguntar ao usuario se ele quer ou nao continuar a digitar valores.

print(' - DESAFIO 065 - ')
num = int(input('Digite um numero: '))

a = 1
soma = num
mediacalc = 1
maior = num
menor = num
while a != 0:
    print()
    deseja = str(
        input('Deseja digitar outro valor? [S / N]: ')).upper()[0].strip()
    if deseja == 'S':
        print()
        num = int(input('Digite outro numero: '))
        soma += num
        mediacalc += 1
        if num > maior:
            maior = num
        elif num < menor:
            menor = num
    elif deseja == 'N':
        a = 0
        print()
    else:
        print()
        print('Erro, tente novamente')
print('Voce digitou {} numeros e a media entre eles foi: {:.2f}'.format(
    mediacalc, soma/mediacalc))
print('O maior numero digitado foi: {}'.format(maior))
print('E o menor numero digitado foi: {}'.format(menor))

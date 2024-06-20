# Crie um programa que leai varios numeros inteiros pelo teclado.
# O programa so vai parar quando o usuario digitar o valor 999, que é a condiçao de parada.
# No final mostre quantos numeros foram digitados e qual foi a soma entre eles
# (desconciderando o flag).

print(' - DESAFIO 064 - ')
num = int(input('Digite um numero (Digite 999 para finalizar a soma): '))

contador = 1
soma = num
while num != 999:
    num = int(input('Digite mais um numero (999 para parar): '))
    if num != 999:
        soma += num
        contador += 1
print('Voce digitou ({}) numeros e a soma entre eles foi: {}'.format(contador, soma))

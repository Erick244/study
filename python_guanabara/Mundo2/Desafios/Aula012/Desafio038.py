# Escreva um programa que leia dois numeros interios e compare-os mostrando na tela uma mensagem:
# - O primeiro valor é maior
# - O segundo valor é maior
# - Não existe valor maior, os dois sao iguais
num1 = int(input('Digite um numero: '))
num2 = int(input('Digite outro numero: '))

print(' - DESAFIO 038 - ')
if num1 > num2:
    print('O primeiro valor e o maior!')
elif num2 > num1:
    print('O segundo valor e o maior!')
elif num1 == num2:
    print('Não existe numero maior, os dois sao iguais!')

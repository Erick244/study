# Crei um programa que leia dois valores e mostre um menu na tela:
# [] somar
# [] multiplicar
# [] maior
# [] novos numeros
# [] sair do programa
# Seu programa devera realizar a operaçao solicitada em cada caso.

from time import sleep
print(' - DESAFIO 059 - ')
valor1 = float(input('Digite o primeiro valor: '))
valor2 = float(input('Digite o segundo valor: '))

print()
menu = int(input('[1] Somar os valores\n'
                 '[2] Multiplicar os valores\n'
                 '[3] Ver qual e o maior valor\n'
                 '[4] Escolher novos numeros\n'
                 '[5] Fechar o programa\n'
                 'Escolha uma das opçoes acima: '))

while menu != 5:
    if menu == 1:
        soma = valor1 + valor2
        print()
        print(' - A soma é: {}'.format(soma))
        print()
        menu = int(input('[1] Somar os valores\n'
                         '[2] Multiplicar os valores\n'
                         '[3] Ver qual e o maior valor\n'
                         '[4] Escolher novos numeros\n'
                         '[5] Fechar o programa\n'
                         'Escolha uma das opçoes acima: '))
        print()
    elif menu == 2:
        mult = valor1 * valor2
        print(' - A multiplicaçao é: {}'.format(mult))
        print()
        menu = int(input('[1] Somar os valores\n'
                         '[2] Multiplicar os valores\n'
                         '[3] Ver qual e o maior valor\n'
                         '[4] Escolher novos numeros\n'
                         '[5] Fechar o programa\n'
                         'Escolha uma das opçoes acima: '))
        print()
    elif menu == 3:
        if valor1 > valor2:
            print(' - O maior valor é: {}'.format(valor1))
        elif valor1 == valor2:
            print(' - Nao existe valor maior.')
        else:
            print(' - O maior valor é: {}'.format(valor2))
        print()
        menu = int(input('[1] Somar os valores\n'
                         '[2] Multiplicar os valores\n'
                         '[3] Ver qual e o maior valor\n'
                         '[4] Escolher novos numeros\n'
                         '[5] Fechar o programa\n'
                         'Escolha uma das opçoes acima: '))
        print()
    elif menu == 4:
        valor1 = 0
        valor2 = 0
        valor1 = float(input('Digite o primeiro valor: '))
        valor2 = float(input('Digite o segundo valor: '))
        print()
        menu = int(input('[1] Somar os valores\n'
                         '[2] Multiplicar os valores\n'
                         '[3] Ver qual e o maior valor\n'
                         '[4] Escolher novos numeros\n'
                         '[5] Fechar o programa\n'
                         'Escolha uma das opçoes acima: '))
        print()
    else:
        print()
        print('Erro, Tente digitar um valor valido')
        print()
        menu = int(input('[1] Somar os valores\n'
                         '[2] Multiplicar os valores\n'
                         '[3] Ver qual e o maior valor\n'
                         '[4] Escolher novos numeros\n'
                         '[5] Fechar o programa\n'
                         'Escolha uma das opçoes acima: '))
        print()
print('Finalizando...')
sleep(0.5)
print('\nPrograma finalizado com sucesso!')

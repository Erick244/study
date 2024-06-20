# Elabore um programa que calcule o valor a ser pago por um produto,
# considerando seu preço normal e condiçao de pagamento:
# - Á vista dinheiro/cheque: 10% de desconto
# - Á vista no cartão: 5% de desconto
# - Em ate 2x no cartão: preço normal
# - 3x ou mais no cartão: 20% de juros
from time import sleep
preço = float(input('Qual e o valor das compras?: R$'))

metodo = int(input('\033[32m[1]\033[m (\033[4mÁ vista\033[m) Dinheiro/Cheque (\033[1m10% de desconto\033[m)\n'
                   '\033[32m[2]\033[m (\033[4mÁ vista\033[m) Cartão (\033[1m5% de desconto\033[m)\n'
                   '\033[32m[3]\033[m (\033[4m2x\033[m no Cartão (\033[1mPreço normal\033[m)\n'
                   '\033[32m[4]\033[m (\033[4m3x\033[m ou mais no Cartão (\033[1m20% de juros\033[m)\n'
                   'Escolha uma das opções acima: '))

print('\033[33mAguarde...\033[m')
sleep(0.5)
print(' - DESAFIO 044 - ')
if metodo == 1:
    preço = preço - (preço*10/100)
    print(
        'Total com \033[32m10%\033[m de desconto: R$\033[32m{:.2f}\033[m'.format(preço))
elif metodo == 2:
    preço = preço - (preço*5/100)
    print(
        'Total com \033[32m5%\033[m de desconto: R$\033[32m{:.2f}\033[m'.format(preço))
elif metodo == 3:
    preço = preço / 2
    print('Total: em 2x no cartao R$\033[32m{:.2f}\033[m'.format(preço))
elif metodo == 4:
    metodo4 = int(input('Digite quantas vezes você quer parcelar: '))
    if metodo4 >= 3:
        juros = preço + (preço*20/100)
        parcelas = juros / metodo4
        print('\033[33mAguarde...\033[m')
        sleep(0.5)
        print(
            'Total em {}X com \033[32m20%\033[m de juros: R$\033[32m{:.2f}\033[m'.format(metodo4, juros))
    elif metodo4 < 3:
        print(
            '\033[31mErro, Reinicie o programa e tente colocar um valor valido.\033[m')
else:
    print('\033[31mErro, Reinicie o programa e tente colocar um valor valido.\033[m')

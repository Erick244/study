# Escreva um programa para aprovar o emprestimo bancario para a compra de uma casa.
# O progrma vai perguntar o valor da casa, o salario do comprador e em quantos anos ele vai pagar.
# Calcule o valor da prestaçao mensal, sabendo que ela nao pode exceder 30% do salario ou entao o
# emprestimo sera negado.
from time import sleep

casa = float(input('Digite o valor da casa: R$'))
salario = float(input('Digite o seu salario: R$'))
anos = int(input('Digite quantos anos de financiamento: '))

anos_mes = (anos * 12)
parcela = casa / anos_mes

print('\033[32mProcessando dados...\033[m')

sleep(0.5)
print(' - DESAFIO 036 - ')
if parcela > salario*30/100:
    print(
        'Não foi possivel concluir o emprestimo!, o valor da parcela exede \033[31m30%\033[m do seu salario.')
elif parcela <= salario*30/100:
    print(
        'Concluido!, Voce devera pagar (R$\033[4m\033[32m{:.2f}\033[m\033[m) em (\033[4m\033[36m{:.0f}\033[m\033[m)'
        ' meses sem juros!'.format(parcela, anos_mes))
print('Obrigado, Tenha um Bom Dia!')

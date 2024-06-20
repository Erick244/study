# Desenvolva um programa que pergunte a distancia de uma viagem em Km. Calcule O preço da passagem,
# cobrando R$0.50 por Km para viagens de ate 200Km e R$0.45 para viagens mais longas.

from time import sleep
dis = float(input('Digite a distancia da sua viagem em KM: '))

print('Calculando valor a pagar...')

sleep(0.6)
print(' - DESAFIO 031 - ')
if dis <= 200:
    preço = dis * 0.50
    print('Sua passagem de ({})KMs vai ficar por apenas R${:.2f}'.format(dis, preço))
else:
    preço = dis * 0.45
    print('Sua passagem de ({})KMs vai ficar por apenas R${:.2f}'.format(dis, preço))
print('Boa Viagem!')

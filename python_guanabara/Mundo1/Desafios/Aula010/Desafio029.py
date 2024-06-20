# Escreva um programa que leia a velocidade de um carro.
# Se ele ultrapassar 80Km/h, mostre uma mensagem dizendo que ele foi multado.
# A multa vai custar R$7.00 por cada Km acima do limite.
from time import sleep

velo = int(input('Digite a velocidade que seu carro esta em KMs: '))

print('Processando dados...')

sleep(1)
print(' - DESAFIO 029 - ')
if velo > 80:
    print('Voce foi multado por excesso de velocidade!')
    multa = (velo - 80) * 7
    print('Voce devera pagar R${:.2f} em multas!'.format(multa))
else:
    print('Voce esta dentro das normas, continue assim!')
print('Tenha um bom dia, dirija com segurança!')

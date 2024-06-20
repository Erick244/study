# Desenvolva uma logica que lia o peso e a aultura de uma pessoa, calcule seu IMC e mostre seu status,
# de acordo com a tabela abaixo:
# - Abaixo de 18.5: Abaixo do Peso
# - Entre 18.5 e 25: Peso ideal
# - 25 ate 30: Sobrepeso
# - 30 ate 40: Obesidade
# - Acima de 40: Obesidade morbida
from time import sleep
peso = float(input('Digite seu peso: KG '))
altura = float(input('Digite sua altura: '))

imc = peso / (altura ** 2)

print('\033[36mCalculando IMC...\033[m')

sleep(0.5)
print(' - DESAFIO 043 - ')
if imc < 18.5:
    print('\033[31mVocê está abaixo do peso!\033[m')
elif 18.5 <= imc < 25:
    print('\033[32mVocê esta no peso ideal!\033[m')
elif 25 <= imc < 30:
    print('\033[33mVocê está srobrepeso!\033[m')
elif 30 <= imc < 40:
    print('\033[33mVocê esta com obesidade!\033[m')
else:
    print('\033[31mVocê esta com obesidade morbida!\033[m')
print('Seu IMC e: {:.1f}'.format(imc))

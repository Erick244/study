# Faça um programa que leia um ano qualquer e mostre se ele e BISSEXTO.
from time import sleep
from datetime import date
print(' - Verificador de ano BISSEXTO, - ')
ano = int(input('Digite um ano, digite 0 se quiser verificar o ano atual: '))

print('Verificando...')
sleep(0.5)
print(' - DESAFIO 032 - ')

if ano == 0:
    ano = date.today().year
if ano % 4 == 0 and ano % 100 != 0 or ano % 400 == 0:
    print('O ano ({}) é BISSEXTO!'.format(ano))
else:
    print('O ano ({}) nao é BISSEXTO!'.format(ano))

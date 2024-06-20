# Crie um programa que faça o computador jogar Jokenpô com você.
from time import sleep
from random import choice
lista = ['Pedra', 'Papel', 'Tesoura']
comp = choice(lista)

print('\033[36mJokenpô online\033[m')

pessoa = str(input(
    'Escolha um, (\033[1mPedra\033[m, \033[1mPapel\033[m ou \033[1mTesoura\033[m): ')).upper().strip()

print('JO')
sleep(0.4)
print('KEN')
sleep(0.4)
print('PO!')

print(' - DESAFIO 045 - ')
# EMPATES:
if comp == 'Pedra' and pessoa == 'PEDRA':
    print('\033[33mOuve um empate!\033[m')
elif comp == 'Papel' and pessoa == 'PAPEL':
    print('\033[33mOuve um empate!\033[m')
elif comp == 'Tesoura' and pessoa == 'TESOURA':
    print('\033[33mOuve um empate!\033[m')
# COMPUTADOR GANHA:
elif comp == 'Pedra' and pessoa == 'TESOURA':
    print('\033[31mA maquina ganhou de você!\033[m')
elif comp == 'Papel' and pessoa == 'PEDRA':
    print('\033[31mA maquina ganhou de você!\033[m')
elif comp == 'Tesoura' and pessoa == 'PAPEL':
    print('\033[31mA maquina ganhou de você!\033[m')
# PESSOA GANHA:
elif pessoa == 'PEDRA' and comp == 'Tesoura':
    print('\033[32mVocê, ganhou Parabens!\033[m')
elif pessoa == 'PAPEL' and comp == 'Pedra':
    print('\033[32mVocê ganhou, Parabens!\033[m')
elif pessoa == 'TESOURA' and comp == 'Papel':
    print('\033[32mVocê ganhou, Parabens!\033[m')
# ERROS:
else:
    print(
        '\033[31mErro digite algo valido!, reinicie o programa e tente novamente.\033[m')
print('A maquina colocou (\033[4m{}\033[m) e você colocou (\033[4m{}\033[m).'.format(
    comp, pessoa.title()))

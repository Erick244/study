# Faça um nini-sistema que utilize o interactivehelp do python.
# O usuário vai digitar o comando e o manual vai aparecer.
# Quando o usuario digitar a palavra 'FIM', o programa se enserrará.
# OBS: use cores.
from time import sleep

print(' - DESAFIO 106 - ')


def lin(msg, cor=''):
    tot = len(msg)+4
    print(f'\033[{cor}m-'*tot)
    print(f'  {msg}')
    print(f'\033[{cor}m-\033[m'*tot)


def ajuda():
    while True:
        lin('-=Sistema de ajuda=-', 36)
        a = str(input('> Função ou Blibioteca: ')).lower().strip()
        if a == 'fim':
            print('\033[33m', end='')
            print()
            print('Porgrama encerrando...', end='')
            print('\033[m')
            sleep(1)
            break
        lin(f'Acessando o manual de comando "{a}"', 36)
        sleep(1.3)
        help(a)
        print()
        print('> Se precisar: https://translate.google.com/?hl=pt-BR&sl=pt&tl=en&op=translate (Tradutor)')
        sleep(1)
    lin('Programa encerrado. Volte sempre! :)', 31)


ajuda()

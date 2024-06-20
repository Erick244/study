# Faça um programa que ajude um jogador da MEGA SENA a criar palpites.
# O programa vai perguntar quantos jogos serao gerados e vai sortear 6 numeros entre 1 e 60
# para cada jogo, cadastrando tudo em uma lista.

from time import sleep
from random import randint

print(' - DESAFIO 088 - ')
print('='*35)
print('Gerador de jogos da MEGA SENA!')
print('='*35)
qts = int(input('Digite quantos jogos voce quer: '))
print()
listaG = []
nums = []
cont = -1
print('-=' * 3, f'SORTEANDO {qts} JOGOS!', '=-' * 3)
while True:
    for c in range(0, 6):
        while True:
            al = randint(1, 60)
            if al not in nums:
                nums.append(al)
                break
        if c == 5:
            listaG.append(nums[:])
            nums.clear()
            cont += 1
            sleep(1)
            print(f'> O jogo {cont+1} e: {listaG[cont]}')
            print()
    if len(listaG) == qts:
        print('-='*5, 'BOA SORTE!', '=-' * 5)
        break

# Faça um programa que jogue par ou impar com o computador. O jogo so sera interrompido quando o jogador
# Perder, mostrando o total de vitorias consecutivas que ele conquistou no final do jogo.

from random import randint
from time import sleep
bot = randint(0, 10)
print(' - DESAFIO 068 - ')
print(' -= Jogo do PAR ou IMPAR =- ')

contwins = 0
erro = 0
while True:
    print()
    if erro == 0:
        pessoa = int(input('Digite o seu numero: '))
    parimpar = str(input('Par ou Impar? [P / I]: ')).upper()[0].strip()
    print()
    if parimpar == 'P':
        if (pessoa + bot) % 2 == 0:
            contwins += 1
            print(
                f'Voce jogou {pessoa} e o bot {bot}. Total de {pessoa + bot} deu PAR!')
            print()
            print('Voce VENCEU!')
            sleep(0.5)
            print()
            print('Jogue mais uma vez!')
        else:
            print(
                f'Voce jogou {pessoa} e o bot {bot}. Total de {pessoa + bot} deu IMPAR!')
            print()
            print('Voce perdeu!')
            sleep(0.5)
            print()
            print(f'Voce venceu ao todo {contwins} veze(s)!')
            print()
            break
    elif parimpar == 'I':
        if (pessoa + bot) % 3 == 0:
            contwins += 1
            print(
                f'Voce jogou {pessoa} e o bot {bot}. Total de {pessoa + bot} deu IMPAR!')
            print()
            print('Voce VENCEU!')
            sleep(0.5)
            print()
            print('Jogue mais uma vez!')
            print()
        else:
            print(
                f'Voce jogou {pessoa} e o bot {bot}. Total de {pessoa + bot} deu PAR!')
            print()
            print('Voce perdeu!')
            sleep(0.5)
            print()
            print(f'Voce venceu ao todo {contwins} vez(es)!')
            break
    else:
        print('Erro, Tente novamente')
        erro = 1

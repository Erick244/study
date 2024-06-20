# Melhore o jogo do desafio 028 onde o computador vai 'pensar' em um numero entre 0 a 10.
# So que agora o jogador vai tentar adivinhar ate acertar, mostrando no final quantos palpites foram
# necessario para vencer.

from random import randint
comp = randint(0, 10)

print(' - DESAFIO 058 - ')
print('-= TENTE ADIVINHAR =-')

start = (
    input('Tente adivinhar um numero entre 0 e 10!, Precione [ENTER] para começar.'))

chute = int(input('Chute um numero: '))

tentativas = 1

while chute != comp:
    tentativas += 1
    if chute != comp:
        if comp < chute:
            print()
            print('Errou, Tente um numero menor')
            print()
        elif comp > chute:
            print()
            print('Errou, Tente um numero maior')
            print()
        chute = int(input('Chute novamente: '))
        if chute == comp:
            print('Parabens!, voce ganhou com {} tentativa(s).'.format(tentativas))
            nova = str(
                input('Deseja jogar novamente? [S / N]: ')).upper()[0].strip()
            if nova == 'S':
                tentativas = 1
                comp = randint(0, 10)
                chute = int(input('Chute um numero: '))
            elif nova == 'N':
                chute = comp
            else:
                print('Erro, Valor invalido')
print('Programa Finalizado!')

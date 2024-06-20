# Faça um programa que tenha uma funçao chamada escreva(),
# que receba um texto qualquer como parametro e mostre uma mensagem com tamanho adaptavel.

print(' - DESAFIO 97 - ')


def escreva(msg):
    tot = len(msg) + 4
    print('─' * tot)
    print(f'  {msg}')
    print('─' * tot)


escreva('Ola, Mundo')
escreva('O MELHOR CURSO DO BRASIL')

# Crie um programa que tenha uma tupla com varias palavras (nao usar acentos).
# Depois disso, você deve mostrar, para cada palavra, quais sao as suas vogais.

tupla = ('EU', 'ESTOU', 'ADORANDO', 'O', 'CURSO', 'DE', 'PYTHON')

print(' - DESAFIO 077 - ')
for palavra in tupla:
    print(f'\nNa palavra {palavra} temos: ', end='')
    for letras in palavra:
        if letras in 'AEIOU':
            print(letras, end=' ')

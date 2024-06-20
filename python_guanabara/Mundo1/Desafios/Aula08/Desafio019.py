#  Um professor quer sortear um dos seus alunos para apgar o quadro. Faça um programa que ajude ele,
# lendo o nome deles escrevendo o nome escolhido.
from random import choice

n1 = str(input('Primeiro aluno: '))
n2 = str(input('Segundo  aluno: '))
n3 = str(input('Terceiro aluno: '))
n4 = str(input('Quarto aluno: '))

alunos = [n1, n2, n3, n4]
escolhido = choice(alunos)

print(' - DESAFIO 019 - \n'
      'O sorteado foi: {}'.format(escolhido))

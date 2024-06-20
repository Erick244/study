# Refaça o Desafio 009, mostrando a tabuada de um numero que o usuario escolher,
# so que agora utilizando um laço for.

num = int(input('Digite um numero: '))

print('A tabuada do numero {} é:\n'
      ' - DESAFIO 049 - '.format(num))

for c in range(1, 11):
    print('{} x {:2} = {}'.format(num, c, num*c))

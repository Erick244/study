# Faça um programa que leai a altura e a largura de uma parede em metros, calcule a sua area e a
# quantidade de tinta necessario para pinta-la, sabendo que cada  litro de tinta, pinta uma area de 2m**2.
a = float(input('Digite a altura da parede: '))
g = float(input('Digite a largura dessa parede: '))

# Variaveis:
area = a*g
x = area/2

# Resultado:
print('|==================== - Desafio 011 - ====================|')
print('| Voce vai precizar de {:.3f} ml de tinta\n'
      '| Para pintar uma parde de {} metros de altura\n'
      '| E {} metros de largura!'.format(x, a, g))
print('|=========================================================|')

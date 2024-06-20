# Crie um programa que leia quanto dinheiro uma pessoa tem na carteira e
# mostre quantos dolares ela pode comprar.
c = float(input('Digite quanto de dinheio voce tem: '))

# Variaveis:
d = c / 5.46

# Resultados:
print('\033[1;35|========== - Desafio 010 - ==========|\033[m')
print('| Voce tem R$\033[31m{}\033[m\n'
      '| E pode comprar US$\033[31m{:.2f}\033[m!'.format(c, d))
print('\033[1;35m|=====================================|\0333[m')

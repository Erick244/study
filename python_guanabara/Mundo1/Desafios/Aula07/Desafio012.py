# Fala um program que leia o preço de um produto e mostre deu novo preço, com 5% de desconto.
p = float(input('Digite o preço: R$'))

# Variaveis
r1 = p - (p*5/100)

#  Resultado:
print('|==================== - Desafio 012 - ====================|')
print('| O preço com 5% de desconto ficou: {:.2f}'.format(r1))
print('|=========================================================|')

import moeda

# Programa
p = float(input('Preço: R$ '))
print(f'Aumentando 15 %, temos {moeda.aumentar(p, 15, True)}')
print(f'Reduzindo 10%, temos {moeda.diminuir(p, 10, True)}')
print(f'Medade de {moeda.moeda(p)} é {moeda.metade(p, True)}')
print(f'O dobro de {moeda.moeda(p)} é {moeda.dobro(p, True)}')

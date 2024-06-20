import moeda

# Programa
p = float(input('Preço: R$ '))
print(f'Aumentando 15%, temos {moeda.aumentar(p, 15)}')
print(f'Reduzindo 10%, temos {moeda.diminuir(p, 10)}')
print(f'Medade de {p} é {moeda.metade(p)}')
print(f'O dobro de {p} é {moeda.dobro(p)}')

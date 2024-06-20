import moeda

# Programa
p = float(input('Preço: R$ '))
print(f'Aumentando 15 %, temos {moeda.moeda(moeda.aumentar(p, 15))}')
print(f'Reduzindo 10%, temos {moeda.moeda(moeda.diminuir(p, 10))}')
print(f'Medade de {moeda.moeda(p)} é {moeda.moeda(moeda.metade(p))}')
print(f'O dobro de {moeda.moeda(p)} é {moeda.moeda(moeda.dobro(p))}')

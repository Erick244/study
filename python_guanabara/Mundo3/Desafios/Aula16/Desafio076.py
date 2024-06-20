# Crie um programa que tenha uma tupla unica com nomes de produtos e seus respectivos preços,
# na sequencia.
# No final, mostre uma listagem de preços, organizando os dados em forma tabular.

print(' - DESAFIO 076 - ')
lista = ('Lápis', 1.75, 'Borracha', 2, 'Caderno', 15.90, 'Estojo', 25, 'Transferidor', 4.20,
         'Compasso', 9.99, 'Mochila', 120.32, 'Caneta', 22.30, 'Livro', 34.90)

print('_'*50)
print()
print(f'{"LISTA DE PREÇOS!":^50}')
print('_'*50)

listaNum = 0
listaNome = 0
for c in range(0, 2):
    while c == 1:
        listaNum = lista[c::2]
        break
    while c == 0:
        listaNome = lista[c::2]
        break

for x in range(0, 9):
    print(f'{listaNome[x]:.<30}R$ {listaNum[x]:.2f}')
print('_'*50)

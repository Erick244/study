# Crie um programa que leia o nome e o preço de varios produtos.
# O programa devera perguntar se o usuario vai continuar.
# No final, mostre:
# A) Qual e o total gasto na compra.
# B) Quantos produtos custam mais de R$1000.
# C) Qual e o nome do produto mais barato.

print(' - DESAFIO 070 - ')
print('----- Lojas Americanas -----')
soma = maismil = mpreço = 0
mbarato = deseja = ''
while True:
    if deseja == 'N':
        break
    print()
    nome = str(input('Digite o nome do produto: ')).upper().strip()
    preço = float(input('Digite o preço: R$'))
    soma += preço
    if preço > 1000:
        maismil += 1
    if mpreço == 0:
        mpreço = preço
        mbarato = nome
    else:
        if mpreço > preço:
            mpreço = preço
            mbarato = nome
    while True:
        print()
        deseja = str(input('Quer continuar? [S / N]: ')).upper()[0].strip()
        if deseja == 'S':
            break
        elif deseja == 'N':
            break
        else:
            print('Erro, tente novamente!')
print('----- Fim da compra -----')
print(f'O total da compra foi R${soma:.2f}\n'
      f'Temos {maismil} produto(s) custando mais de R$1000.00\n'
      f'O produto mais barato foi o(a) {mbarato.title()} que custa R${mpreço:.2f}')

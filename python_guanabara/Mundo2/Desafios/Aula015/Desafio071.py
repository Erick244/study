# Crie um programa que simule o funcionamento de um caixa eletronico.
# No inicio, pergunte ao usuario o valor a ser sacado (numero inteiro) e o prorama vai informar quantas
# cedulas de cada valor serao entregues.
# OBS: Considere que o caixa possui cedulas de R$50, R$20, R$10 e R$1.

print(' - DESAFIO 071 - ')
saque = int(input('Digite o valor do saque: R$'))

r50 = r20 = r10 = r1 = 0

while True:
    r50 = saque // 50
    if saque % 50 == 0:
        print(f'O total de notas de R$50 foi {r50}')
        break
    else:
        print(f'O total de notas de R$50 foi {r50}')
        r50 = saque % 50
    r20 = r50 // 20
    if r50 % 20 == 0:
        print(f'O total de notas de R$20 foi {r20}')
        break
    else:
        print(f'O total de notas de R$20 foi {r20}')
        r20 = r50 % 20
    r10 = r20 // 10
    if r10 % 10 == 0:
        print(f'O total de notas de R$10 foi {r10}')
        break
    else:
        print(f'O total de notas de R$10 foi {r10}')
        r10 = r20 % 10
    r1 = r10 // 1
    if r1 % 1 == 0:
        print(f'O total de moedas de R$1 foi {r1}')
        break
print('------=BANCO FLECA=------')
print('Volte sempre ao Banco Fleca!')

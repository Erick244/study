# Crie um programa que leia o ano de nascimento de sete pessoas.
# No final, mostre quantas ainda nao atingiram a maioridade e quantas ja sao maiores.

midade = 0
nidade = 0
print(' - DESAFIO 054 - ')
for c in range(1, 8):
    nas = int(input('Digite o ano de nascença da {} pessoa: '.format(c)))
    if nas <= 2000:
        midade += 1
    elif nas > 2000:
        nidade += 1
print('{} sao de maioridade e {} sao de menoridade!'.format(midade, nidade))

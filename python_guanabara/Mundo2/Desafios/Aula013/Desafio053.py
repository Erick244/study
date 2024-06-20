# Crie um programa que leia uma frase qualquer e diga se ela e um palindromo,
# desconsiderando os espaços.

frase = str(input('Digite uma frase\palavra: ')).strip().upper()
rspaço = frase.split()
juntar = ''.join(rspaço)
inverso = ''

print(' - DESAFIO 053 - ')
for letra in range(len(juntar)-1, -1, -1):
    inverso += juntar[letra]
print('A palavra ({}) invertida ficou ({})'.format(frase.title(), inverso))

if inverso == juntar:
    print('Esta palavra/frase e um PALINDROMO!')
else:
    print('Esta palavra/frase nao e um PALINDROMO!')

# Forma otimizada sem o laço FOR
'''frase = str(input('Digite uma frase/palavra: ')).strip().upper()

split = frase.split()
juntar = ''.join(split)
inverso = juntar[::-1]

print('A palavra {} invertida ficou {}'.format(juntar.title(), inverso))

if inverso == juntar:
    print('Temos um palindromo!')
else:
    print('Nao temos um palindromo!')'''

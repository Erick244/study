# Refaça o desafio 051, lendo o primeiro termo e a razao de uma PA, mostrando os 10 primeiros
# termos da progreçao usando a estrutura while.

print(' - DESAFIO 061 - ')
primeiro = int(input('Digite o primeiro termo: '))
razao = int(input('Digite a razao: '))

termo = primeiro
contador = 1
while contador <= 10:
    contador += 1
    termo += razao
    print('{} - '.format(termo), end='')
print('FIm')

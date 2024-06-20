# Melhore o desafio 061, perguntando para o usuario se ele que mostrar mais alguns termos.
# O programa encerra quando ele disser que quer mostrar 0 termos.

print(' - DESAFIO 062 - ')
primeiro = int(input('Digite o primeiro termo: '))
razao = int(input('Digite a razao: '))
digite = int(input('Digite quantos termos voce quer ver: '))


termo = primeiro
contador = 1
while contador != digite+1:
    contador += 1
    termo += razao
    print('{} - '.format(termo), end='')
print('Fim')

quit = False
while quit == False:
    deseja = str(input('Deseja ver mais termos? [S / N]: ')).upper()[0].strip()
    if deseja == 'S':
        digite = int(input('Digite quantos termos voce quer ver a mais: '))
        contador = 1
        while contador != digite+1:
            contador += 1
            termo += razao
            print('{} - '.format(termo), end='')
        print('Fim')
        if digite == 0:
            contador = digite+1
            quit = True
            print('Progrma finalizado com sucesso!')
    else:
        quit = True
        print('FIm')
        print('Progrma finalizado com sucesso!')

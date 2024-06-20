# Crie um programa onde o usuario possa digitar varios valores numericos e cadastre-os em uma lista.
# Caso o numero ja exixta la dentro, ele nao sera adicionado.
# No final, serao exibidos todos os valores unicos digitados, em ordem crescente.

numeros = []
while True:
    num = int(input('Digite um numero: '))
    if num not in numeros:
        print()
        print('Numero adicionado!')
        print()
        numeros.append(num)
    else:
        print()
        print('Numero duplicado. Não vou adicionar!')
        print()
    deseja = str(input('Deseja continuar? [S / N]: ')).upper()[0].strip()
    if deseja == 'N':
        print()
        break
numeros.sort()
print(f'Voce digitou os valores: {numeros}')

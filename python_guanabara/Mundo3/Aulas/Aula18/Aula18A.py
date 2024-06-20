'''teste = []
teste.append('Erick')
teste.append(16)
grupo = []
grupo.append(teste[:])
teste[0] = 'Roberto'
teste[1] = 32
grupo.append(teste[:])
print(grupo)'''

'''grupo = [['Erick', 16], ['Julia', 17], ['Ricardo', 23], ['Carlos', 21]]
print(grupo[1][0])'''

'''grupo = [['Erick', 16], ['Julia', 17], ['Ricardo', 23], ['Carlos', 21]]
print('O nome de cada pessoa do grupo e: ', end='')
for p in grupo:
    print(f'{p[0], }', end='')
print('\nE a idade de cada pessoa e: ', end='',)
for i in grupo:
    print(f'{i[1]}, ', end='')'''

grupo = []
dados = []
menor = maior = 0
for c in range(0, 3):
    dados.append(str(input('Digite o nome: ')))
    dados.append(int(input('Digite a idade: ')))
    grupo.append(dados[:])
    dados.clear()
for p in grupo:
    if p[1] > 20:
        print(f'{p[0]} tem mais de vinte anos!')
        maior += 1
    else:
        print(f'{p[0]} nao tem mais de vinte anos!')
        menor += 1
print(f'Temos {maior} e {menor} menores de idade.')

'''pessoas = {
    'Nome': 'Erick',
    'Sexo': 'M',
    'Idade': 16
}
print(f'A pessoa {pessoas["Nome"]} tem {pessoas["Idade"]} anos')'''

# Mostrar CHAVES
'''pessoas = {
    'Nome': 'Erick',
    'Sexo': 'M',
    'Idade': 16
}
print(pessoas.keys())'''

# Mostrar valores
'''pessoas = {
    'Nome': 'Erick',
    'Sexo': 'M',
    'Idade': 16
}
print(pessoas.values())'''

# Mostrar tudo
'''pessoas = {
    'Nome': 'Erick',
    'Sexo': 'M',
    'Idade': 16
}
print(pessoas.items())'''

# Usando 'for' para dividir entre as keys e os values.
'''pessoas = {
    'Nome': 'Erick',
    'Sexo': 'M',
    'Idade': 16
}
for k, v in pessoas.items():
    print(f'{k}: {v}')'''

# Deletando keys
'''pessoas = {
    'Nome': 'Erick',
    'Sexo': 'M',
    'Idade': 16
}
del pessoas['Sexo']
print(pessoas.keys())'''

# Substituindo itens
'''pessoas = {
    'Nome': 'Erick',
    'Sexo': 'M',
    'Idade': 16
}
pessoas['Nome'] = 'Lucas'
print(pessoas['Nome'])'''

# Adicionado itens
'''pessoas = {
    'Nome': 'Erick',
    'Sexo': 'M',
    'Idade': 16
}
pessoas['Peso'] = 78.5
print(pessoas)'''

# Adicionando dicionarios dentro de uma lista.
'''brasil = []
estado1 = {
    'Cidade': 'Sao Paulo',
    'Sigla': 'SP'
}
estado2 = {
    'Cidade': 'Rio de Janeiro',
    'Sigla': 'RJ'
}
brasil.append(estado1)
brasil.append(estado1)
print(brasil[0]['Cidade'])'''

# Misturando dicionarios com listas.
estado = dict()
brasil = []
for c in range(0, 3):
    estado['Cidade'] = str(input('Digite uma cidade: '))
    estado['Sigla'] = str(input('Digite a sigla da cidade: '))
    brasil.append(estado.copy())
for i in brasil:
    for v in i.values():
        print(v, end=' ')
    print()

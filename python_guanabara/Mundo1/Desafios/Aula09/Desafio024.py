# Crie um programa que leia o nome de uma cidade e diga se ela começa ou nao com o nome "Santo".
city = str(input('Digite o nome da sua cidade: ')).strip()

# Metodo 1:
print(' - DESAFIO 024 - '
    'A cidade ({}) começa com a plavra Santo?: {}'.format(
    city.capitalize().title(), city[:5].capitalize() == 'Santo'))

# Metodo 2:
#tst = city.capitalize()
#cortar = tst.split()
#res = 'Santo' in cortar[0]

# print(' - DESAFIO 024 - \n'
#      'A cidade ({}) começa com a palavra SANTO?: {}'.format(city, res))

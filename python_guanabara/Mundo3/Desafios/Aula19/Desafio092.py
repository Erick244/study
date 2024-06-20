# Crie um programa que leia nome, ano de nascimento e carteira de trabalho e cadastre-os (com idade)
# em um dicionario se por acaso a CTPS for diferente de zero, o dicionario recebera tambem
# o ano de contrataçao e o salario.
# Calcule e acrescente, alem da idade, com quantos anos a pessoa vai se aposentar.
from datetime import datetime

print(' - DESAFIO 92 - ')
dados = {}
dados['Nome'] = str(input('Nome: ')).strip().title()
ano = int(input('Ano de Nascimento: '))
dados['Idade'] = datetime.now().year - ano
dados['CTPS'] = int(input('Carteira de Trabalho [0 NAO TEM]: '))
if dados['CTPS'] > 0:
    dados['Contrataçao'] = int(input('Ano de contrataçao: '))
    dados['Salario'] = float(input('Salario: R$ '))
    dados['Aposentadoria'] = (dados['Contrataçao'] - ano) + 35
print()
print('-=DADOS GERAIS=-')
for k, v in dados.items():
    if k == 'Salario':
        print(f'{k}: R${v:.2f}')
    else:
        print(f'{k}: {v}')

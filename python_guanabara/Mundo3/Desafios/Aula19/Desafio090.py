# Faça um programa que leia nome e media de um aluno,
# guardando tambem a situaçoes em um dicionario.
# No final mostre o conteudo da estrutura na tela.

print(' - DESAFIO 90 - ')
dic = {}
dic['Nome'] = str(input('Digite o nome: ')).strip().title()
dic['Media'] = float(input(f'Media de {dic["Nome"]}: '))
if dic['Media'] < 5:
    dic['Situaçao'] = 'Reprovado'
elif dic['Media'] < 7:
    dic['Situaçao'] = 'Recuperaçao'
else:
    dic['Situaçao'] = 'Aprovado'
print()
for k, v in dic.items():
    print(f'{k} e igual a {v}')

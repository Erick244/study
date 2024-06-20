# Crie um programa que leia nome e duas notas de varios alunos e guarde tudo em uma lista composta.
# No final, mostre um boletim contendo a media de cada um e permita que o usuario possa mostrar as notas
# de cada aluno individualmente.

print(' - DESAFIO 89 - ')
dados = []
while True:
    nome = str(input('Digite o nome: ').strip().title())
    nota1 = float(input('Digite a primeira nota: '))
    nota2 = float(input('Digite a segunda nota: '))
    media = (nota1+nota2)/2
    dados.append([nome, [nota1, nota2], media])
    print()
    deseja = str(input('Deseja continuar? [S / N]: ')).strip()
    print()
    if deseja in 'Nn':
        break
print()
print(f'{"No.":<4}{"Nomes":<10}{"Media":>8}')
print('.'*22)
for i, a in enumerate(dados):
    print(f'{i:<4}{a[0]:<10}{a[2]:>8.1f}')
while True:
    print()
    qts = int(input('Quer ver a note de qual aluno? [-1 Para FECHAR]: '))
    print()
    if qts <= -1:
        print('Programa finalizado!')
        break
    if qts <= len(dados) - 1:
        print(f'Notas de {dados[qts][0]}: {dados[qts][1]}')
    else:
        print('Erro. Tente novamente')

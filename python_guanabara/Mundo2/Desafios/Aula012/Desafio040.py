# Crie um programa que leia dua notas de um aluno e calcule sua media,
# mostrando uma mensagem no final, de acordo com a media atingida:
# - Media abaixo de 5.0: Reprovado
# - Media entre 5.0 e 6.9: Recuperaçao
# - Media 7.0  ou superior: Aprovado
from time import sleep
nota1 = float(input('Digite a primeira nota: '))
nota2 = float(input('Digite a segunda nota: '))

media = (nota1 + nota2)/2
print('\033[36mCalculando a media...\033[m')

sleep(0.6)
print(' - DESAFIO 040 - ')
if media < 5:
    print('\033[31mReprovado!\033[m')
elif media >= 7:
    print('\033[32mAprovado!\033[m')
else:
    print('\033[33mRecuperação!\033[m')
print('Sua media foi {:.1f}'.format(media))

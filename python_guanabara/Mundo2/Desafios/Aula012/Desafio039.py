# Faça um programa que leia o ano de nascimento de uma jovem e informe, de acordo com sua idade:
# - Se ele ainda vai se alistar ao serviço militar.
# - Se é a hora de se alistar.
# - Sejá passou do tempo de alistamento.
# Seu program também deverá mostrar o tempo que falta ou que passou do prazo.
from time import sleep
nascimento = int(input('Digite o seu ano de nascença: '))
sexo = int(input('Escolha uma das opçoes abaixo:\n'
                 '[1] Masculino\n'
                 '[2] Feminino\n'
                 'Digite sua opçao: '))

idade = 2021 - nascimento
ano = nascimento + 18

print('\033[32mAguarde...\033[m')
sleep(0.5)
print(' - DESAFIO 039 - ')
if sexo == 1:
    if idade < 18:
        idade = 18 - idade
        print(
            'Você ainda preciza se alistar!, faltam apenas \033[1;36m{}\033[m anos.'.format(idade))
        print('Seu alistamento vai ser em {}'.format(ano))
    elif idade == 18:
        print('E hora de se alistar!')
    elif idade > 18:
        idade = idade - 18
        print(
            'Você já passou do prazo de se alistar, voce passou \033[1;36m{}\033[m anos do prazo!'.format(idade))
        print('Seu alistamento foi em {}'.format(ano))
elif sexo == 2:
    print('Voce nao precisa fazer o alistamento obrigatoriamente.')
else:
    print('Erro, Tente digitar um valor valido.')

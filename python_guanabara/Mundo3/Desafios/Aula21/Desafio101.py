# Crie um programa que tenha uma função chamada voto() que vai receber como parâmetro o ano de nascimento
# de uma pessoa, retornando um valor literal indicando se uma pessoa tem voto NEGADO,
# OPCIONAL ou OBRIGATORIO nas eleições.

print(' - DESAFIO 101 - ')


def voto(nas):
    from datetime import date
    idade = date.today().year - nas
    print(f'Com {idade} anos: ', end='')
    if idade < 16:
        return 'NÂO VOTA.'
    elif 16 <= idade < 18 or idade > 65:
        return 'VOTO OPCIONAL.'
    else:
        return 'VOTO OBRIGATORIO.'


# Programa
print('-'*40)
r = voto(int(input('Digite o ano de nascimento: ')))
print(r)

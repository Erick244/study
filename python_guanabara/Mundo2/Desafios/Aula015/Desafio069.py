# Crei um programa que leia a idade e sexo de varias pessoas.
# A cada pessoa cadastrada, o programa devra pergunta se o usuario que continuar ou nao.
# No final mostre:
# A) Quantas pessoas tem mais de 18 anos.
# B) Quantos homens foram cadastrados.
# C) Quantas mulheres tem menos de 20 anos.

print(' - DESAFIO 069 - ')
print('| -=Cadastre aqui!=- |')
print()
idade = int(input('Digite a idade: '))

cont18 = contm20 = conth = 0
deseja = ''
while True:
    if deseja == 'N':
        break
    sexo = str(input('Digite o sexo [M / F]: ')).upper()[0].strip()
    print()
    if sexo != 'M' and sexo != 'F':
        print('Erro. Tente novamente')
    if idade >= 18:
        cont18 += 1
    if sexo == 'M':
        conth += 1
    if sexo == 'F' and idade < 20:
        contm20 += 1
    while sexo == 'M' or sexo == 'F':
        deseja = str(
            input('Deseja registrar mais uma pessoa? [S / N]: ')).upper()[0].strip()
        if deseja == 'S':
            idade = int(input('Digite a idade: '))
            break
        if deseja == 'N':
            break
        else:
            print('Erro, Tente novamente!')
print()
print(f'Total de pessoas com mais de 18 anos: {cont18}')
print(f'Ao todo temos {conth} homen(s) cadastrado(s)')
print(f'E temos {contm20} mulher(s) com menos de 20 anos.')

# Faça um progra que leia o sexo de uma pessoa, mas so aceite os valores 'M' ou 'F'.
# Caso esteja errado, peça a digitaçao novamente ate ter um valor correto.

print(' - DESAFIO 057 - ')
sexo = str(input('Digite seu sexo [M / F]: ')).upper()[0].strip()

quit = 0
while quit != 1:
    if sexo == 'M':
        print('Sexo masculino registrado!')
        quit = 1
    elif sexo == 'F':
        print('Sexo feminino registrado!')
        quit = 1
    else:
        sexo = str(
            input('Digite um valor correto [M / F]: ')).upper()[0].strip()
        if sexo == 'M':
            print('Sexo masculino registrado!')
            quit = 1
        elif sexo == 'F':
            print('Sexo feminino registrado!')
            quit = 1

# Crie um programa que tenha a função leiaint(), que vai funcionar de forma semelhante á
# função input() do Python, Só que fazendo a validação para aceitar apenas um valor numérico.

def leiaint(str):
    while True:
        a = input(str)
        x = a.isnumeric()
        while x == False:
            print('\033[4;031mErro! Digite um numero inteiro.\033[m')
            break
        if x == True:
            break
    return a


# Programa principal
print('-' * 30)
n = leiaint('Digite um numero: ')
print(f'Você acabou de digitar o numero {n}')

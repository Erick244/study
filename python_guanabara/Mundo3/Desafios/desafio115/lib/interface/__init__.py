def leiaInt(msg):
    while True:
        try:
            x = int(input(msg))
        except KeyboardInterrupt:
            print('\033[4;33mO usuario preferiu nao digitar a opção.\033[m')
            return int(3)        
        except:
            print('\033[4;31mErro. Digite uma opçao valida.\033[m')
        else:
            return x


def lin(tam = 42):
    return '-' * tam

def cabeçario(msg):
    print(lin())
    print(msg.center(len(lin())))
    print(lin())
    
    
def menu(lista):
    cabeçario('\033[4;30mMenu Principal\033[m')
    c = 1
    for v in lista:
        print(f'\033[32m{c}\033[m - \033[4;30m{v}\033[m')
        c += 1
    print(lin())
    opc = leiaInt('\033[32mEscolha uma opção:\033[m ')
    return opc
        
        
def leiaStr(msg):
    while True:
        try:
            a = str(input(msg)).strip()
        except KeyboardInterrupt:
            print('\033[4;33mO usuario preferiu nao digitar nome.\033[m')
            return '\033[37m<sem-nome>\033[m'
        if a.isalpha() is False or a == '':
            print('\033[4;31mErro. Digite um valor valido.\033[m')
        else:
            return a
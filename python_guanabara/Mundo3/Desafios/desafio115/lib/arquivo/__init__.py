from os import execlp


def arqExiste(msg):
    try:
        a = open(msg, 'rt')
        a.close()
    except FileNotFoundError:
        return False
    else:
        return True

def criarArquivo(msg):
    try:
        a = open(msg, 'wt+')
    except:
        print(f'\033[31mFalha ao criar o arquivo {msg}\033[m')
    else:
        a.write('Nome\t\t\tIdade\n'
                '-------------------------------------------\n')
        a.close()
        
def lerArquivo(msg):
    try:
        a = open(msg, 'rt')
    except:
        print('\033[4;31mErro ao ler o arquivo.\033[m')
    else:
        print(a.read())
    finally:
        a.close()
        
def cadastro(arq, nome='', idade=0):
    try:
        a = open(arq, 'at')
    except:
        print('\033[4;31mHouve um erro na abertuda de arquivo na hora de cadastrar.\033[m')
    else:
        try:
            a.write(f'{nome}\t\t\t{idade}\n')
        except:
            print('\033[4;31mHouve um erro na hora de esqurever os dados.\033[m')
        else:
            print(f'\033[32mCadastro de "{nome}" realizado com sucesso!\033[m')
            a.close()
    
    
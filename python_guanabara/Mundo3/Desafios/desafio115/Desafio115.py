# Crie um pequeno sistema modularizado que permita cadastrar pessoas pelo seu nome e idade em um arquivo
# de texto simples.
# O sistema só vai ter 2 opçoes: cadastrar uma nova pessoa e listar todas as pessoas cadastradas.
from lib.arquivo import *
from time import sleep
from lib.interface import *

arq = 'banco115.txt'
if not arqExiste(arq):
    criarArquivo(arq)


while True:
    resp = menu(['Cadastrar uma pessoa', 'Lista de pessoas cadastradas', 'Sai do programa'])
    if resp == 1:
        cabeçario('\033[4;30mNOVO CADASTRO\033[m')
        nome = leiaStr('\033[32mDigite o nome: \033[m')
        idade = leiaInt('\033[32mDgite a idade: \033[m')
        cadastro(arq, nome, idade)
        sleep(2)
    elif resp == 2:
        cabeçario('\033[4;30mLISTA DE PESSOAS\033[m')
        lerArquivo(arq)
        print()
        sleep(2)
    elif resp == 3:
        print('\033[33mPrograma finalizando...\033[m')
        sleep(1)
        break
    else:
        print('\033[4;31mErro. Digite uma opção valida.\033[m')
        sleep(1)
print('\033[1;31mProgroma finalizado!\033[m')
# Adicione ao modulo moeda.py criado nos desafios anteriores, uma função chamada resumo, que mostre na
# tela algumas informações geradas pelas funções que ja temos no módulo criado até aqui.

def aumentar(preço=0, por=0, format=False):
    res = preço + (preço*por/100)
    return res if format is False else moeda(res)


def diminuir(preço=0, por=0, format=False):
    res = preço + (preço*por/100)
    return res if format is False else moeda(res)


def dobro(preço=0, format=False):
    res = preço * 2
    return res if format is False else moeda(res)


def metade(preço=0, format=False):
    res = preço / 2
    return res if format is False else moeda(res)


def moeda(preço=0, moeda='R$'):
    return f'{moeda}{preço:.2f}'.replace('.', ',')


def resumo(preço=0, taxaA=5, taxaD=5):
    print('-'*35)
    print('RESUMO'.center(35))
    print('-'*35)
    print(f'O preço analizado: \t{moeda(preço)}')
    print(f'O dobro é: \t\t{dobro(preço, True):>5}')
    print(f'A metade é: \t\t{metade(preço, True)}')
    print(f'Aumentando {taxaA}%: \t{aumentar(preço, taxaA, True)}')
    print(f'Reduzindo {taxaD}%: \t\t{diminuir(preço, taxaD, True)}')
    print('-'*35)

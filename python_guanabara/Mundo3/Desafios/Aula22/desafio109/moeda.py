# Modifique as funções que foram criadas no desafio 107 para que elas aceitem um parâmetro a mais.
# Informando se o valor retornado por elas vai ser ou não formatado pela funçao moeda() desemvolvida
# no desafio.

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

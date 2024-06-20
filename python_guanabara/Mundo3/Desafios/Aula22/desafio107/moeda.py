# Crie um módulo chamado moeda.py que tenha as funções incorpotadas aumanrtar(), diminuir, dobro
# e metade. Faça tambem um programa que importe esse módulo e use algumas dessas funções.

def aumentar(preço, por=0):
    res = preço + (preço*por/100)
    return res


def diminuir(preço, por=0):
    res = preço + (preço*por/100)
    return res


def dobro(preço):
    res = preço * 2
    return res


def metade(preço):
    res = preço / 2
    return res

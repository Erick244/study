# Crie um programa que tenha uma função fatorial() que receba dois parâmetros: o primeiro que indique o
# número a calcular e o outro chamado show, que sera um valor logico (opcional) indicando se será mostrado
# ou não na tela o processo de cálculo do fatorial.

print(' - DESAFIO 102 - ')


def fatorial(n=1, show=False):
    """
    -> Calcular o Fatorial de um numero.
    Parametro n: O numero que vai ser calculado.
    Parametro show: (Opcional) Mostra ou nao o processo da conta.
    Retorno: O calculo do fatorial.
    """
    f = 1
    for c in range(n, 0, -1):
        f *= c
        if show == True:
            print(c, end='')
            print(f' x'if c > 1 else ' =', end=' ')
    return f


# Programa PRINCIPAL
print('-' * 30)
print(fatorial(5))
help(fatorial)

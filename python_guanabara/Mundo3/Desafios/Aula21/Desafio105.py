# Faça um programa que tenha uma função notas() que pode receber várias notas de alunos e vai
# retornar um dicionario com as seguintes informações:
# - Quantidade de notas
# - A maior nota
# - A media da turma
# - A situação (opcional)
# Adicione também as docstrings da função.

print(' - DESAFIO 105 - ')


def notas(*notas, sit=False):
    """
    -> Função para analizar notas e situações de vários alunos.
    - Parametro notas: Uma ou mais notas dos alunos (aceita varias).
    - Parametro sit: Valor opcional, indicando se deve ou não adicionar a situação.
    - Retorno: Dicionário com várias informações da turma.
    """
    dic = {}
    dic['total'] = len(notas)
    dic['maior'] = max(notas)
    dic['menor'] = min(notas)
    media = sum(notas) / len(notas)
    dic['media'] = media
    if sit == True:
        if media >= 7:
            dic['situaçao'] = 'BOA'
        elif media < 6:
            dic['situaçao'] = 'RUIM'
        else:
            dic['situaçao'] = 'RAZOAVEL'
    return dic


# Programa principal
print('-' * 50)
r = notas(5.5, 10, 5, 7, sit=True)
print(r)
# help(notas)

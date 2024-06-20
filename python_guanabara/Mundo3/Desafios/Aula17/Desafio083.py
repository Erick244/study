# Crie um program onde o usuario digite uma expressao qualquer que use parenteses.
# Seu aplicativo devera analisar se a expressao passada esta com os parenteses abertos
# e fechados na ordem correta.

print(' - DESAFIO 083 - ')
teste = str(input('Digite uma expreçao: ')).strip()
lista = []
for pare in teste:
    if pare == '(':
        lista.append('(')
    elif pare == ')':
        if len(lista) > 0:
            lista.pop()
        else:
            lista.append(')')
            break
if len(lista) == 0:
    print('Sua expreçao esta correta!')
else:
    print('Sua expreçao esta incorreta')

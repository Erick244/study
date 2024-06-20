'''def linha():
    print('-' * 20)

linha()
print('   Curso em video   ')
linha()
print('   O melhor curso   ')
linha()'''


'''def mensagem(msg):
    print('-'*30)
    print(msg)
    print('-'*30)


mensagem('   O curso esta muito bom!   ')
mensagem('   Estou gostando do curso!   ')'''


'''def soma(a, b):
    s = a + b
    print(f'O valor A vale {a} e o valor B vale {b}.')
    print(f'E a soma de A + B = {s}')


soma(b=50, a=10)'''


'''def cont(*num):
    tot = len(num)
    print(f'Recebi os valores {num} e sao ao todo {tot} numeros')


cont(5, 5, 6, 7, 8)
cont(3, 5, 76)
cont(1)'''


'''def dobra(lst):
    cont = 0
    while cont < len(lst):
        lst[cont] *= 2
        cont += 1


numeros = [1, 2, 3, 4, 5]

print(f'A lista {numeros}', end=' ')
dobra(numeros)
print(f'dobrada ficou assim {numeros}')'''


'''def soma(*num):
    s = 0
    for v in num:
        s += v
    print(f'A soma dos valores {num} e = {s}')


soma(4, 5, 1)
soma(9, 10, 1)'''

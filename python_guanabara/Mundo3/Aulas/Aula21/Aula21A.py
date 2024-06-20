'''def teste(x):
    global a
    b = a
    a += 2
    c = 2
    print(f'O A vale {a}\n'
          f'O B vale {b}\n'
          f'O C vale {c}')


a = 10
teste(a)
print(a)'''


'''def soma(a=0, b=0, c=0):
    x = a + b + c
    return x


res1 = soma(4, 5, 6)
res2 = soma(2, 4)
res3 = soma(1)
res4 = soma()
print(f'O resultado dos calculos foram: {res1}, {res2}, {res3}, {res4}')'''


'''def fatorial(v=1):
    f = 1
    for c in range(v, 0, -1):
        f *= c
    return f


# Programa principal
r1 = fatorial(5)
r2 = fatorial(10)
r3 = fatorial()
print(f'Os resultados foram: {r1}, {r2} e {r3}')'''


'''def par(num):
    if num % 2 == 0:
        return 'E PAR!'
    else:
        return 'E IMPAR!'


r = par(num=int(input('Digite um numero: ')))
print(r)
'''

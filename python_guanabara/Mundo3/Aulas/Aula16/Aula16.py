# TUPLAS SAO IMUTAVEIS!

'''lanche = ('Hamburguer', 'Suco', 'Pizza', 'Pudin')
print(lanche[-2:])'''

'''lanche = ('Hamburguer', 'Pizza', 'Esfirra', 'Pudim')
for comida in lanche:
    print(f'Eu vou comer {comida}')
print('Estou satisfeito!')'''

'''lanche = ('Hamburguer', 'Pizza', 'Esfirra', 'Pudim')
for posiçao, comida in enumerate(lanche):
    print(f'Eu vou comer {comida} na posiçao {posiçao}')
print('Estou satisfeito!')'''

'''lanche = ('Hamburguer', 'Pizza', 'Batata frita', 'Lasanha', 'Coxinha')
for cont in range(0, len(lanche)):
    print(f'Hoje eu vou comer {lanche[cont]} na posiçao {cont}')
print('Acabou')'''

'''lanche = ('Coxinha', 'Banana', 'Pizza')
print(sorted(lanche))'''

'''a = (1, 2, 3)
b = (4, 5, 6)
c = a + b
print(c)'''

'''x = (1, 5, 5, 7)
y = (9, 10, 23)
c = x + y
print(c.count(5))'''

'''x = (1, 5, 6, 7)
y = (9, 10, 5)
c = x + y
print(c)
print(f'O numero 5 esta na posiçao {c.index(5)} e na posiçao {c.index(5, 2)}')'''

'''pessoa = 'Jose', 32, 'M', '85.56'
print(pessoa)'''

pessoa = 'Jose', 32, 'M', '85.56'
del(pessoa)
print(pessoa)

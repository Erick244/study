'''num = [2, 4, 5, 6]
num[1] = 999
num.append(8)
num.append(10)
num.sort(reverse=True)
num.insert(1, 7)
num.append(3)
if 3 in num:
    num.remove(3)
    print('Pronto')
else:
    print('Nao exixte numero 3 na lista')
num.pop(4)
num.remove(5)
print(num)
print(f'Esta lista tem {len(num)} elementos!')'''

'''lista = []
lista.append(1)
lista.append(2)
lista.append(3)

for c, v in enumerate(lista):
    print(f'Na posiçao {c} eu achei o valor {v}!')
print('Cheguei ao fim da lista!')'''

'''lista = []
for f in range(0, 5):
    lista.append(int(input('Digite um valor: ')))
for c, v in enumerate(lista):
    print(f'Na posiçao {c} eu achei o valor {v}!')
print('Cheguei ao fim da lista!')'''

'''a = [1, 2, 3, 5]
b = a
b[3] = 4
print(f'Lista A: {a}')
print(f'Lista B: {b}')'''

a = [2, 4, 5, 6]
b = a[:]
b[1] = 7
print(f'Lista A: {a}')
print(f'Lista B: {b}')

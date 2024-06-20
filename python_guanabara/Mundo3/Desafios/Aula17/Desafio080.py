# Crie um programa onde o usuario possa digitar cinco valores numericos e cadastre-os em uma lista,
# ja na posiçao correta de inserçao (Sem usar o sort())
# No final, mostre a lista ordenada na tela.

num = []

for c in range(0, 5):
    n = int(input('Digite um numero: '))
    if c == 0 or n > num[-1]:
        print('Adicionado no final da lista!')
        num.append(n)
    else:
        pos = 0
        while pos < len(num):
            if n <= num[pos]:
                num.insert(pos, n)
                print(f'Adicionado na posiçao {pos} da lista!')
                break
            pos += 1
print(f'Os valores digitados em ordem foram: {num}')

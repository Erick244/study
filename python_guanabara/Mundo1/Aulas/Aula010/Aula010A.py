n1 = float(input('Digite sua primeira nota: '))
n2 = float(input('Digite sua segunda note: '))

media = (n1 + n2)/2
print('Sua media é {:.1f}'.format(media))

if media >= 6.0:
    print('Parabens voce passou de ano!')
else:
    print('Infelismente voce nao passou de ano.')

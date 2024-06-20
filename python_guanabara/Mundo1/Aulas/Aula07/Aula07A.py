n1 = int(input('Digite um numero: '))
n2 = int(input('Digite outro: '))

s = n1 + n2
su = n1 - n2
m = n1 * n2
d = n1 / n2
e = n1 ** n2
di = n1 // n2
r = n1 % n2

print('A soma e {}\n'
      'A sub e {}\nE a mult e {}'.format(s, su, m), end=' ')
print('A div e {:.4f}\n'
      'A potencia e {}\n'
      'A divint e {}\n'
      'E o resto da div e {}'.format(d, e, di, r))

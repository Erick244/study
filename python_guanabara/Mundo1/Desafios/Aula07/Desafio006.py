# Faça um programa que leia um numero e mostre o seu dobro, seu triplo
# e sua raiz quadrada.
num = int(input('Digite um numero: '))

# Resultado:
print('\033[1;35m|===== - Desafio 006 - =====|\033[m')
print('O numero escolhido foi: \033[31m{}\033[m\n'
      'O drobro deste numero é: \033[31m{}\033[m\n'
      'O triplo deste numero é: \033[31m{}\033[m\n'
      'A raiz quadrada deste numero é: \033[31m{:.3f}\033[m'.format(num, (num*2), (num*3), (num**(1/2))))

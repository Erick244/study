# Fazer um programa que leia um numero e mostre seu sucessor e seu antecessor.
n = int(input('Digite um numero: '))

# Resultado:
print('\033[1;35m|===== - Desafio 005 - =====|\033[m')
print('O numero escolhido foi: \033[31m{0}\033[m\n'
      'O seu sucessor e: \033[31m{1}\033[m\n'
      'E seu antecessor e: \033[31m{2}\033[m'.format(n, (n+1), (n-1)))

# Escreva um programa que leai um numero inteiro qualquer e peça para o usuario escolher
# qual sera a base de corversao:
# - 1 para binario
# - 2 para octal
# - 3 para hexadecimal

num = int(input('Digite um numero inteiro: '))

print('''Escolha uma das opçoes de conversao abaixo:
      [1] Binario
      [2] Octal
      [3] Hexadecimal
      [4] Todas''')
opçao = int(input('Digite sua opçao: '))

if opçao == 1:
    print('{} covertido para BINARIO e igual a {}'.format(num, bin(num)[2:]))
elif opçao == 2:
    print('{} convertido para OCTAL e igual a {}'.format(num, oct(num)[2:]))
elif opçao == 3:
    print('{} convertido para HEXADECIMAL e igual a {}'.format(
        num, hex(num)[2:]))
elif opçao == 4:
    print('{} Binario\n'
          '{} Octal\n'
          '{} Hexadecimal'.format(bin(num)[2:], oct(num)[2:], hex(num)[2:]))
else:
    print('Erro, Digite uma opçao valida!')

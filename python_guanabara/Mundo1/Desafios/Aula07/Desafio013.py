# Faça um programa que lia o salario de um funcionario e mostre seu novo salario, com 15% de almento.
s = float(input('Digite o seu salario: R$'))

# Variaveis:
p1 = s + (s*15/100)

# Resultado:
print('|==================== - Desafio 013 - ====================|')
print('| O seu novo salario com 15% de aumento: R${:.2f}'.format(p1))
print('|=========================================================|')

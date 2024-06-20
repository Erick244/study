# Escreva um programa que pergunte o salariode um funcionario e calcule o valor do seu aumento.
# Para salarios superiores a R$1.250.00, calcule um aumento de 10%.
# Para os inferiores ou iguais, o aumento e de 15%
from time import sleep
salario = float(input('Digite seu salario: R$'))

print('Calculando...')
sleep(1)
print(' - DESAFIO 034 - ')
if salario > 1250.00:
    t1 = salario + (salario*10/100)
    print('Antes voce recebia (R${:.2f}) e agora com um almento de 10% voce recebera: R${:.2f}'.format(
        salario, t1))
else:
    s1 = salario + (salario*15/100)
    print('Antes voce recebia (R${:.2f}) e agora com um almento de 15% voce recebera: R${:.2f}'.format(
        salario, s1))

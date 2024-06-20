# Faça um programa que leai o nome completo de uma pessoa, mostrando em seguida o
# primeiro e o ultimo nome separadamente.
n = str(input('Digite seu nome completo: ')).strip()

nome = n.split()
print(' - DESAFIO 027 - \n'
      'Prazer em te conhcer!\n'
      'Seu primeiro nome e: {}'.format(nome[0].title()))

print('Seu ultimo nome e: {}'.format(nome[len(nome)-1].title()))

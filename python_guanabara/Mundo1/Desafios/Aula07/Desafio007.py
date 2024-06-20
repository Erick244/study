# Faça um programa que leia 2 notas de um aluno e some a media.
n1 = float(input('Quanto voce tirou em matematica?: '))
n2 = float(input('Quanto voce tirou em portugues?: '))

# Resultado:
print('\033[1;35m|===== - Desafio 007 - =====|\033[m\n'
      'Nota em matematica: \033[31m{:.1f}\033[m\n'
      'Nota em portugues: \033[31m{:.1f}\033[m\n'
      'Sua media é: \033[31m{:.1f}\033[m\n'
      '\033[1;35m|===========================|\033[m'.format(n1, n2, ((n1+n2)/2)))

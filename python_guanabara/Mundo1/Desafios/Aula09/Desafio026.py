# Faça um program que leai uma frase pelo teclado e mostre:
# Quantas vezes aparece a letra "A",
# Em que posiçao ela aparece a primeira vez.
# Em que posiçao ela aparece a ultima vez.
frase = str(input('Digite uma frase: ')).strip().upper()

print('- DESAFIO 026 - \n'
      'Sua frase ({}) aparece {} vezes a letra "A"'.format(frase.title(), frase.count('A')))

print('E essa letra aparece primeiro na posiçao: {}\n'
      'E em ultimo na posiçao: {}'. format(frase.find('A')+1, frase.rfind('A')+1 - frase.count(' ')))

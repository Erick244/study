# Crie um programa que tenha uma tupla totalmente preenchida com uma contagem por extenso, de zero ate vente.
# Seu programa devera ler um numero pelo teclado(entre 0 e 20) e mostra-lo por extenso.

tupla = ('Zero', 'Um', 'Dois', 'Tres', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez',
         'Onze', 'Doze', 'Treze', 'Quatorze', 'Quinze', 'Dezeseis', 'Dezesete', 'Dezoito', 'Dezenove',
         'Vinte')

print(' - DESAFIO 072 - ')
while True:
    num = int(input('Digite um numero entre 0 e 20: '))
    if num < 0 or num > 20:
        print('Erro. Tente novamente')
    else:
        print()
        print(f'> Voce digitou o numero ({tupla[num]})')
        print()
        deseja = str(
            input('Voce quer continuar? [S / N]: ')).upper()[0].strip()
        if deseja == 'N':
            break
print('Programa finalizado!')

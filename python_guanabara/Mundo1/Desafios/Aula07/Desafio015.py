# Escreva um programa que pergunte a quantidade de KM percorridos por um carro alugado e a
# quantidade de dias pelos quais ele foi alugado. Calcule o preço a pagar, sabendo que o carro
# custara R$60 por dia e R$0.15 por KM percorrido.
dia = int(input('Quantos dias ele foi alugado?: '))
km = float(input('Quantos KMs voce percorreu com o carro alugado?: '))

# Variaveis:
total = (dia * 60) + (km * 0.15)

# Resultado:
print(' - DESAFIO 015 - \n'
      ' - Valor total a pagar: R${:.2f}'.format(total))

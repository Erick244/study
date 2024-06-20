# Escreva em programa que coverta uma temperatura digitada em Celsius e corverta para fahrenheit.
c = int(input('Digite uma temperatura em ºC: '))

# Variaveis:
f = (9/5)*c+32

# Resultado:
print(' - DESAFIO 014 - \n'
      ' - A temperatura {} ºC convetida em ºF ficara asiim: {:.0f} ºF'.format(c, f))

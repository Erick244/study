# Faça um programa que leia um valor  em metros e mostre ele trasnformado em centimetros e milimetros.
m = float(input('Digite o valor em metros: '))

# Variaveis:
km = m / 1000
hm = m / 100
dam = m / 10
dm = m * 10
cm = m * 100
mm = m * 1000


# Resultado:
print('\033[1;35m|========== - Desafio 008 - ==========|\033[m\n'
      'O valor escolhido foi {} metros!\n'
      'KM: \033[31m{}\033[m Quilômetros\n'
      'HM: \033[31m{}\033[m Hectômetros\n'
      'DAM: \033[31m{:.3f}\033[m Decâmetro\n'
      'DM: \033[31m{}\033[m Decímetro\n'
      'CM: \033[31m{}\033[m Centímetros\n'
      'MM: \033[31m{}\033[m Milímetros\n'
      '\033[1;35m|=====================================|\033[m'.format(m, km, hm, dam, dm, cm, mm))

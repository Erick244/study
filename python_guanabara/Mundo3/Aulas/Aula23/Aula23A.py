try:
    a = int(input('Digite um numero: '))
    b = int(input('Outro: '))
    x = a / b
except (ValueError, TypeError):
    print('Tivemos um erro com os tipos de dados!')
except ZeroDivisionError:
    print('Nao e possivel dividir numeros por zero!')
except KeyboardInterrupt:
    print('Erro. Informe algum dado!')
else:
    print(f'O resultado e {x}')
finally:
    print('Bom Dia, volte sempre!')

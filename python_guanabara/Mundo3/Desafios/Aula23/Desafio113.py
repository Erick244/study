# Reescreva a função leiaint() que fizemos no desafio 104, incluindo agora a possibilidade da digitação
# de um número de tipo inválido. Aproveite e crie também uma funçao leiafloat() com a mesma funcionalidade.


print(' - DESAFIO 113 - ')
def leiaInt(msg):
    while True:
        try:
            a = int(input(msg))
        except KeyboardInterrupt:
            print('\033[4;33mO usuario preferiu nao digitar este valor.\033[m')
            return '\033[37m<nao_informado>\033[m'
        except:
            print('\033[4;31mErro. Digite um numero inteiro!\033[m')
            continue
        else:
            return a


def leiaFloat(msg):
    while True:
        try:
            a = float(input(msg))
        except KeyboardInterrupt:
            print('\033[4;33mO usuario preferiu nao digitar este valor.\033[m')
            return '\033[37m<nao_informado>\033[m'
        except:
            print('\033[4;31mErro. Digite apenas numeros reais!\033[m')
            continue
        else:
            return a


x = leiaInt('Digite um numero inteiro: ')
y = leiaFloat('Digite um numero real: ')
print(f'Voce digitou o numero inteiro {x}, e o numero real {y}')
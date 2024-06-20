# Crie um código em Python que teste se o site Pudim está acessivel pelo computador usado.

import urllib
import urllib.request

try:
    site = urllib.request.urlopen('https://www.pudim.com.br')
except:
    print('\033[4;31mO site pudim nao esta acessivel no momento!\033[m')
else:
    print(f'\033[4;32mO site pudim esta acessivel!\033[m')
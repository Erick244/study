# Faça um programa que leia algo, fale o tipo e todas as informaçoes possiveis.
a = input('Digite algo: ')


# Resultado:
print('\033[35m|==================== - Desafio 04 - ====================|\033[m')
print('\033[35m|\033[m O tipo e:', type(a))
print('\033[35m|\033[m Contem apenas letras?:', a.isalpha())
print('\033[35m|\033[m Contem apenas numeros?:', a.isnumeric())
print('\033[35m|\033[m Contem apenas letras e numeros?:', a.isalnum())
print('\033[35m|\033[m Contem algum decimal?:', a.isdecimal())
print('\033[35m|\033[m E um digito?:', a.isdigit())
print('\033[35m|\033[m Tem apenas letras minusculas?:', a.islower())
print('\033[35m|\033[m Tem apenas letras maiusculas?:', a.isupper())
print('\033[35m|\033[m Pode ser impresso?:', a.isprintable())
print('\033[35m|\033[m Tem apenas spaços:', a.isspace())
print('\033[35m|\033[m E um titulo?:', a.istitle())
print('\033[35m|=========================================================|\033[m')

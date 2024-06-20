nome = str(input('Digite seu nome: ')).upper().strip()
if nome == 'ERICK':
    print('Que nome lindo voce tem!')
elif nome == 'LUCAS' or nome == 'RAISSA' or nome == 'ENZO':
    print('Seu nome e popular no brasil!')
print('Tenha um bom dia \033[34m{}\033[m!'.format(nome.title()))

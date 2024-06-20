let amigo = {nome: 'Lucas', 
sexo: 'M', 
peso: 76.7, 
engordar(p){
    console.log('Engordou')
    this.peso += p
}
}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)
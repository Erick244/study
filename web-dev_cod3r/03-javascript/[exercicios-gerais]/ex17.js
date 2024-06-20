function somarArray(array) {
   const resultado = array.reduce((acumulator, atual) => acumulator + atual);
   return resultado;
}

console.log(somarArray([10, 10, 10, 20, 30]))
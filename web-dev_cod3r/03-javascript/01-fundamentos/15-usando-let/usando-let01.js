let numero = 1;
let global = 'Global';
{
    let numero = 2;
    console.log('dentro =', numero);
    console.log(global);
}
console.log('fora =', numero);
console.log(global);
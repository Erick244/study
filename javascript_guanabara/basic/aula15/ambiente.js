/*let num = [9, 5, 6, 2, 8, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} elementos!`)
console.log(`O primeiro valor do vetor é ${num[0]}`)


let num = [7, 5, 0, 2, 8, 3]
for(let c = 0; c <= num.length; c++) {
    console.log(`A posição ${c} tem o valor ${num[c]}`)
}



let num = [7, 5, 0, 2, 8, 3]
num.sort()

for(let c in num) {
    console.log(`O elemento ${c} tem o valor ${num[c]}`)
}
*/

let num = [7, 5, 0, 2, 8, 3]

let pos = num.indexOf(9)
if (pos == -1) {
    console.log(`Não encontrei o valor desejado.`)
} else {
    console.log(`O valor desejado esta na posição ${pos}`)
}
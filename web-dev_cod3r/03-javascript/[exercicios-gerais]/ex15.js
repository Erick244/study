function apenasParesEIndicesPares(array) {
    const newArray = [];
    array.forEach((e, i) => {
        if (i % 2 == 0) {
            if (e % 2 == 0) {
                newArray.push(e)
            }
        }
    })
    return newArray;
}

console.log(apenasParesEIndicesPares([1, 2, 3, 4]))
console.log(apenasParesEIndicesPares([10, 70, 22, 44]))
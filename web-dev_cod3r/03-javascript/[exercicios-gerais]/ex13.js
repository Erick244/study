function filtrarNumeros(array) {
    const newArray = [];
    array.forEach(element => {
        if (typeof element == 'number') {
            newArray.push(element);
        }
    })
    return newArray;
}

console.log(filtrarNumeros(['JavaScript', 1, 2, 'web']));
console.log(filtrarNumeros(['a', 'b', 'c']));
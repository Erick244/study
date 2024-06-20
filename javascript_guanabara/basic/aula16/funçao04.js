function fatoria(n) {
    let fat = 1
    for(let c = n; c > 1; c--) {   //5! = 5 x 4 x 3 x 2 x 1 = 120
        fat *= c
    }
    return fat
}

console.log(fatoria(5))
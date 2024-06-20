function areaDoTriangulo(base, altura) {
    const area = (base * altura) / 2;
    return area.toFixed(2);
}

console.log(areaDoTriangulo(10, 15));
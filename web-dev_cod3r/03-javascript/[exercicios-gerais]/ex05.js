function maiorOuIgaul(primeiro, segundo) {
    if (typeof primeiro != 'number' || typeof segundo != 'number') {
        return false;
    } else {
        if (primeiro >= segundo) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(maiorOuIgaul(0, '0'));
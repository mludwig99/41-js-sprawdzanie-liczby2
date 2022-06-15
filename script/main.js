function result(nr1, nr2) {
    if (nr1 + nr2 <= 20 || nr1 === 20 || nr2 === 20) {
        return true;
    } else {
        return false;
    }
}
console.log(result(19, 5));
console.log(result(1, 7));
console.log(result(20, 7));

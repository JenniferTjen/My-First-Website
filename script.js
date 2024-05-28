function add7(n) {
    return n + 7;
}

function multiply(a, b) {
    return a * b;
}

function capitalize(s) {
    return s.substring(0, 1).toUpperCase() + s.substring(1, s.length);
}

function lastLetter(d) {
    return d.substring(d.length - 1, d.length);
}


console.log(add7(6));
console.log(multiply(3, 5));
console.log(capitalize("darren"));
console.log(lastLetter("Jenny"));
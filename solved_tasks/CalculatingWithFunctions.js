function comparacion(str, num) {
    if (str.length == 0) {
        return (string = num);
    } else {
        let operationString = `${num} ${str}`;
        return Math.floor(eval(operationString));
    }
}
function zero(string = '') {
    return comparacion(string, 0);
}
function one(string = '') {
    return comparacion(string, 1);
}
function two(string = '') {
    return comparacion(string, 2);
}
function three(string = '') {
    return comparacion(string, 3);
}
function four(string = '') {
    return comparacion(string, 4);
}
function five(string = '') {
    return comparacion(string, 5);
}
function six(string = '') {
    return comparacion(string, 6);
}
function seven(string = '') {
    return comparacion(string, 7);
}
function eight(string = '') {
    return comparacion(string, 8);
}
function nine(string = '') {
    return comparacion(string, 9);
}

function plus(string) {
    let operation = ` + ${string}`;
    return operation;
}

function minus(string) {
    let operation = `- ${string}`;
    return operation;
}
function times(string) {
    let operation = `* ${string}`;
    return operation;
}
function dividedBy(string) {
    let operation = '/ ' + string;
    return operation;
}

// best practice

//  const id = x => x,
//   number = x => (f = id) => f(x),
//   [zero, one, two, three, four, five, six, seven, eight, nine] =
//     [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(number),
//   plus = x => y => y + x,
//   minus = x => y => y - x,
//   times = x => y => y * x,
//   dividedBy = x => y => y / x;

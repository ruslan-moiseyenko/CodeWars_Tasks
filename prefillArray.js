// Create the function prefill that returns an array of n elements that all have the same value v. See if you can do this without using a loop.

// You have to validate input:

// v can be anything (primitive or otherwise)
// if v is ommited, fill the array with undefined
// if n is 0, return an empty array
// if n is anything other than an integer or integer-formatted string (e.g. '123') that is >=0, throw a TypeError
// When throwing a TypeError, the message should be n is invalid, where you replace n for the actual value passed to the function.

function prefill(n, v) {
    // n = Number(n);
    if (n === 0) {
        return [];
    } else if (
        isNaN(n) ||
        !isFinite(n) ||
        n < 0 ||
        typeof n === 'boolean' ||
        n % 1 !== 0 ||
        /[\D]/g.test(n)
    ) {
        console.log('error');
        throw new TypeError(`${n} is invalid`);
    }
    if (n === 1) {
        return [v];
    } else {
        return [v].concat(prefill(n - 1, v));
    }
}
prefill(-1, 9);
// prefill(3, prefill(2, '2d'));

//best practice
// function prefill(n, v) {
//     if (!/^\d+$/.test('' + n)) throw new TypeError(n + ' is invalid');
//     return Array(+n).fill(v);
// }

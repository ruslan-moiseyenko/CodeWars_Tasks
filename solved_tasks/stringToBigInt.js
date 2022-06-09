// https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9/train/javascript
// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.
// the array can't be empty
// only non - negative, single digit integers are allowed
// Return null(or your language's equivalent) for invalid inputs.

// Examples
// For example the array[2, 3, 9] equals 239, adding one would return the array[2, 4, 0].

// [4, 3, 2, 5] would return [4, 3, 2, 6]

let arr1 = [2, 3, 9];
let arr2 = [4, 3, 2, 5];
let arr3 = [4, -3, 2, 5];
let arr4 = [
    1, 7, 4, 7, 3, 3, 6, 4, 8, 3, 5, 5, 7, 0, 1, 6, 6, 1, 5, 7, 2, 3, 7, 8, 2,
    0, 2, 8, 7, 5, 2, 0, 17, 3, 2, 5, 0, 8, 2, 0, 8, 0
];

let arr5 = [9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 8];
let arr6 = [
    5, 5, 2, 5, 8, 4, 5, 4, 2, 0, 4, 2, 2, 0, 3, 0, 0, 5, 0, 7, 3, 7, 9, 4, 7,
    4, 3, 2, 3, 2, 8, 9, 3, 6, 2, 0, 4, 7, 3, 1, 9, 1
];

function upArray(arr) {
    if (arr.length === 0) {
        return null;
    }
    if (arr.some((x) => x < 0 || x > 9)) {
        return null;
    }
    let strFromArr = arr.join('');
    let bitInt = BigInt(strFromArr) + 1n;
    return bitInt
        .toString()
        .split('')
        .map((item) => ~~item);
}

console.log(upArray(arr5));

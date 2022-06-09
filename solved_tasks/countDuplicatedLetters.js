// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text) {
    //...

    let arr = text.toLowerCase().split('');
    let obj = {};
    for (let key in arr) {
        if (obj[arr[key]]) {
            obj[arr[key]]++;
        } else {
            obj[arr[key]] = 1;
        }
    }
    let finalArray = Object.keys(obj).filter((key) => obj[key] > 1);
    return finalArray.length;
}

console.log(duplicateCount('abcdebbcffd')); // 0

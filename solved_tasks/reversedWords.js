// Reversed Words
// Complete the solution so that it reverses all of the words within the string passed in.

let string = "The greatest victory is that which requires no battle";

function reverseWords(str) {
    return str.split(" ").reverse().join(" "); // reverse those words
}

console.log(reverseWords(string));
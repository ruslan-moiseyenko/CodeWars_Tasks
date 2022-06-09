str = 'first letter capitalized';

let capitalized = str
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
console.log(capitalized);

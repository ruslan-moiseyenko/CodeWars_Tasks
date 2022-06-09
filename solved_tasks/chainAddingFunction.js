function add(n) {
    const result = (num) => add(n + num);
    result.valueOf = () => n;
    return result;
}

console.log(add(1)(2)(3)); // == 6
// add(1)(2)(3)(4); //  == 10
// add(1)(2)(3)(4)(5); // == 15

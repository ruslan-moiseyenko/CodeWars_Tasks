//Function composition
// const addOne = (a) => a + 1
// const multTwo = (b) => b * 2
// const addOneMultTwo = (c) => multTwo(addOne(c))

// addOneMultTwo(5) // returns 12

function compose(...args) {
    return (arg) => args.reduceRight((accum, func) => func(accum), arg);
}

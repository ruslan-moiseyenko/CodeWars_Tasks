// Let's make a Cat constructor!
var Cat = (function () {
    const allCatsWidth = [];

    const constructor = function (name, weight) {
        if (arguments.length < 2) throw Error('Missed some of parameters');
        Object.defineProperties(this, {
            name: { get: () => name },
            weight: {
                get: () => weight,
                set: (value) => (weight = value)
            }
        });
        allCatsWidth.push(this);
    };

    constructor.averageWeight = () =>
        allCatsWidth.reduce((accum, current) => accum + current.weight, 0) /
        allCatsWidth.length;

    return constructor;
})();
garfield = new Cat('garfield', 25);
console.log(Cat.averageWeight()); // 25

felix = new Cat('felix', 15);
Cat.averageWeight(); // now 20

// return the nested property value if it exists,
// otherwise return undefined

var obj = {
    person: {
        name: 'joe',
        history: {
            hometown: 'bratislava',
            bio: {
                funFact: 'I like fishing.'
            }
        }
    }
};
Object.prototype.hash = function (string) {
    let pathArr = string.split('.');
    let current = this;
    for (let i = 0; i < pathArr.length; i++) {
        if (current[pathArr[i]] === undefined) {
            return undefined;
        }
        current = current[pathArr[i]];
    }
    return current;
};

console.log(obj.hash('person.animal.pet.needNoseAntEater')); // 'joe'
// obj.hash('person.history.bio'); // { funFact: 'I like fishing.' }
// obj.hash('person.history.homeStreet'); // undefined
// obj.hash('person.animal.pet.needNoseAntEater'); // undefined

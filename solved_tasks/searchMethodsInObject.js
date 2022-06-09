// sayHoHoHo() / say_ho_ho_ho;
// distributeGifts() / distribute_gifts;
// goDownTheChimney() / go_down_the_chimney;

function isSantaClausable(obj) {
    // TODO
    return ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'].every(
        (isFunc) => typeof obj[isFunc] === 'function'
    );
}

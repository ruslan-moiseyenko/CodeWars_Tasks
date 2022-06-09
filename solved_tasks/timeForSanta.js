datesArray = ['12:15:20', '5:30:30', '4:00:10'];

function determineTime(durations) {
    //have fun with coding ^.^
    let day = 86400000;
    let result = durations.reduce((accum, current) => {
        let [hours, minutes, seconds] = current.split(':');
        let duration =
            Number(hours) * 3600000 +
            Number(minutes) * 60000 +
            Number(seconds) * 1000;
        return accum + duration;
    }, 0);
    return result >= day;
}
console.log(determineTime(datesArray));

// 16 Find the leap years in a given range of years.


function rangOfYears(start, end) {
    const years = [];
    for (let i = start; i <= end; i++) {
        years.push(i);
    }

    var newArr = [];
    years.forEach(function (year) {
        if (checkLeapYear(year))
            newArr.push(year)
    });
    return newArr;
}

function checkLeapYear(year) {

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
        return year;
    } else {
        return false;
    }
}
console.log(rangOfYears(2000, 2024));
// 'use strict';

// let hasDriversLicence = false;
// const passTest = true;

// if(passTest) hasDriversLicence = true;
// if(hasDriversLicence) console.log('I can drive :D');

// function logger() {
//     console.log('My name is A Rehman');
// }
// logger();
// logger();

// function fruitProcessor(apples, oranges){
//     console.log(apples, oranges);
//     const juice = `Juices with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }
// const appleJuices = fruitProcessor(5, 0);
// console.log(appleJuices);


// const calcAge = function(birthYear){
//     return 2037 - birthYear;
// }

// const calcAge = birthYear => 2037 - birthYear;
// const age = calcAge(1981);
// console.log(age);

const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;

    return `${firstName} retires in ${retirement} years `;
}

console.log(yearUntilRetirement(1981, 'A Rehman'));
console.log(yearUntilRetirement(1986, 'M S'));

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


// const yearUntilRetirement = (birthYear, firstName) => {
//     const age =  calcAge(birthYear);
//     const retirement = 65 - age;
//     if(retirement > 0){
//         return retirement;
//     }

//     // return `${firstName} retires in ${retirement} years `;
// }

// console.log(yearUntilRetirement(1981, 'A Rehman'));
// console.log(yearUntilRetirement(1986, 'M S'));



// ARRYS


/////////////////////
// const friends = ['Michael', 'Stven', 'Peter'];

// friends.push('Joy');
// friends.push('Roy');
// friends.push('Alex');
// console.log(friends);
// //
// friends.pop();

// console.log(friends);
// if(friends.includes('Michael')){
//     console.log('You have frieds called Machael');
// }


//OBJECTS


////////////


const arArry = [
    'Abdul',
    'Rehman',
    2022 - 1982,
    'Engineer',
    ['Azhar', 'Bilal', 'Hameed']
];

const ar = {
    firstName: 'Abdul',
    lastName: 'Rehman',
    age: 2022 - 1982,
    job: 'Engineers',
    frinds: ['Azhar', 'Bilal', 'Hameed']
};

console.log(ar);
console.log(ar.lastName);

const namekey = 'Name';
console.log(ar['first' + namekey]);
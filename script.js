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


// const ar = {
    //     firstName: 'Abdul',
    //     lastName: 'Rehman',
    //     age: 2022 - 1982,
    //     job: 'Engineer',
    //     frinds: ['Azhar', 'Bilal', 'Hameed']
    // };
    


// const ar = [
//     'Abdul',
//     'Rehman',
//     2022 - 1982,
//     'Engineer',
//     ['Azhar', 'Bilal', 'Hameed']
// ];

// for(let i = 0; i < ar.length; i++){
//     console.log(ar[i], typeof ar[i]);
// }

// for(let outer = 1; outer < 5;  outer++){
//     console.log(`---------Starting Chapter ${outer}`);
//     for(let inner = 1; inner < 6; inner++){
//         console.log(`Chapter No ${outer}----------- Lesson No ${inner}`);
//     }
// }

'use strict';

const Person = function(firstName, birthTYear){

    this.firstName = firstName;
    this.birthTYear = birthTYear;
};

const ar = new Person('Abdul', 1982);
console.log(ar);
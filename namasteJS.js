// Clouser in js

console.log("welcome to to JavaScript");
// function outer(){
//     var a=10;

//     function inner(){
//         console.log("a :",a);

//     }
//     return inner;
// }

// const innerFunction = outer();

// console.log("lots of code is ahead ........");
// innerFunction();

/**
 * Clouser : clouser is the combination bundled together with refercene
 *  to its surrunding state(the lexical envirnment );
 */

//

// data hiding using closure , now below can see count variable is now hidden from outside 
// outside code, no one can direcltly access our count variable

// function counter(){
//     var count=0;

//     return function counterIncrement(){
//         count++;
//         console.log(count);
//     }


// }
// // console.log(count);
// counter()();

/**
 * Promise: promises is an object that representing eventulally completed or
 *  failure of asyncronous opration and its resulting values.
 * 
 * promises is used to handle inversion of control of code/program.
 * 
 * 
 */

const GITHUB_PROFILE = 'https://api.github.com/users/pmdkr';

const user = fetch(GITHUB_PROFILE);
console.log(user);

user.then(function (response) {
    const json = response.json();
    json.then(function (data) {
        const username = data.login;
        console.log(username);

    })
})



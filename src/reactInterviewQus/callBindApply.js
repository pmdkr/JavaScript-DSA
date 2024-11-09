// const name1 = {
//     firstName: "pramod",
//     lastName: "lohra",
//     printFullName: function () {
//         console.log(`Full name is: ${this.firstName} ${this.lastName}`)
//     }

// }


// const name2 = {
//     firstName: "keshav",
//     lastName: "kumar",


// }

// name1.printFullName();
// name1.printFullName.call(name2);


const name1={
    firstName:"Pramod",
    lastName:"Lohra",

}

let printFullName=function(){
    console.log(`${this.firstName} ${this.lastName}`);
}

printFullName.call(name1);

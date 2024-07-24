/**
 * This is project I created for to learn data structure in JavaScript 
 */


console.log("Namaste JavaScript array and its methods");
 
/**
 * Arrays in javascript are can hold any type of data , integer,boolean,string
 */

const arr=[1,2,"pants",true];

// arr.push("kurta");
// arr.unshift(0);
// arr.shift();
// console.log(arr);



const todo=[
    {
        id:1,
        task:'play',
        isCompleted:true
    },
    {
        id:2,
        task:'study',
        isCompleted:true
    },
    {
        id:3,
        task:'market',
        isCompleted:false,
    },
    {
        id:4,
        task:'bath',
        isCompleted:true,
    }
];

todo.push({
    id:5,
    task:'so something',
    isCompleted:false,
});
// console.log(todo[4].isCompleted);


todo.forEach(function(item){
    // console.log(item.isCompleted)

})

// map returns a new array with same length
const todoTask=todo.map(function(toDos){
   return toDos.task;

})
// console.log(todoTask);

// filter returns new array might be length could be diffrent
const filerText= todo.filter(function(items){
    return items.isCompleted===false;

});
console.log(filerText);






// constructor:
function Person(firstName, lastName,dob){
    this.firstName=firstName;
    this.lastName=lastName;
    this.dob=new Date(dob);
}

const p1= new Person("pramod","lohra","4-08-1997");

// console.log(p1.dob);
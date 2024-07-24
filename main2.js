// forEach   : for each function takes a callback with 3 parameter , value , index and array
// const arr=['apple','grapes','bnana','stwoberry'];

// // console.log(typeof(arr));
// arr.forEach((item)=>{
//     console.log(item+'1');

// })
// const arr=[1,2,3,4,5,6];

// arr.forEach(consoleItem);

// function consoleItem(item,index,arr){
//     // console.log('a['+index+']='+item);
//     console.log(arr);

// }

// const latters=['a','b','c','a','c','a','d'];
// const count={};

// latters.forEach(consoleItem);
// function consoleItem(item,index,arr){
    
//     if(count[item]){
//         count[item]++;

//     }else{
//         count[item]=1;
//     }
//     return
// }

// console.log(count);

// Map returns a new array does not changed the main one

// const nums=[1,2,3,4,5,7];
// const numsDouble=nums.map(doubleItem);

// function doubleItem(value,index,arr){
//     return value*2;

// }

// console.log(numsDouble);

// const products=[
//     {
//         name:"laptop",
//         price:1000,
//         count:5
//     },
//     {
//         name:"desktop",
//         price:2500,
//         count:3
//     },
//     {
//         name:"phone",
//         price:500,
//         count:15
//     },

// ]

// const totalProductPrice=products.map(item=>({
//     productName:item.name,
//     totalPrice:item.count*item.price
// }));
// console.log(totalProductPrice);

// const str=['1','2','3','4','6'];
// console.log(typeof(str[0]));

// const nums=str.map(item=>Number(item));
// console.log(nums);
// console.log(typeof(nums[1]));


// filter method: it takes a callback funtion with 3 parameter: value, index and arr. and if the filter conditon is returns false it will not added to returning array.

// const nums= [1,2,3,5,7,4,3,2,6,5,3];
// const uniqe=nums.filter(filterValue);

// function filterValue(value,index,arr){
//     return arr.indexOf(value)===index;

// }

// console.log(uniqe);


// reduce: the reduce mehtod takes array and comperss it and return single value, it takes callback with
//  4 parameter: accumaltor, value , index and arr.  
// in each iteraction, it updated the accumulator value like for loop,  

// const nums=[1,2,3,4,5,6,7];

// const total=nums.reduce(callback,0);

// function callback(accumaltor,value){

//     return accumaltor+value;
// }

// console.log(total);

const nums=[1,2,3,4,5,6,7];

const max=nums.reduce(callback,-Infinity);

function callback(accumaltor,value){

    if(accumaltor>value){
        return accumaltor;
    }else{
        return value;
    }
}

console.log(max);
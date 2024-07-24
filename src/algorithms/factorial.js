/**
 * Factorial of non-negative number n is denoted by n!
 * 
 * and factorial of Zero is 1
 * 
 * 
 */

function factorial(n){
    let result=1;
    for(let i=2;i<=n;i++){
        result=result*i;
    }
    return result;

}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));


//Big-O= O(n)
//in the above code only one loop is present , so as our n size incresed no of times of execution of line 12 will run.
// so the time complexity will be O(n)

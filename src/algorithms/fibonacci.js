// Fibonacci series


const fib=[0,1];
function fibonacci(n){
    for(let i=2;i<n;i++){
        fib[i]=fib[i-1]+fib[i-2];
    }
    return fib;

}

console.log(fibonacci(3));
console.log(fibonacci(8));
console.log(fibonacci(10));
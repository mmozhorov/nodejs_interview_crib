//1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711

const fib = ( num ) => {
    if( num <= 2 ) return 1;

    return fib( num - 1 ) + fib( num - 2 );
}

console.log( fib(10) );
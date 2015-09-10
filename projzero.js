'use strict';

var count = 0;

function BadSizeException( message ) {
  this.name = 'BadSize';
  this.message = message;
}

/**
 * Throws a BadSizeException if `n` does not represent a valid size
 * @param {number} n - size
 */
function ensureValidSize( n ) {
  if ( typeof n !== 'number' ) {
    throw new BadSizeException( 'Size is not a number' );
  }
  if ( n < 0 ) {
    throw new BadSizeException( 'Negative size' );
  }
}

/**
 * 1. Write a function inc that takes a numeric argument x and returns the value x + 1. Don't worry about what happens
 * if it's given a non-numeric argument; we will not test that case. The same guarantee of well-behaved arguments
 * applies to all of items 1 through 6; it does not, however, apply to items 7 through 9.
 *
 * @param {number} x - value to increment
 * @returns {number} - value of x, incremented
 */
function inc( x ) {
  return ++x;
}

/**
 * 2. Write a function counter that takes no arguments. On its first invocation it returns 1; on its second invocation
 * it returns 2; and in general on its nth invocation it returns n.
 *
 * @returns {number} - current count
 */
function counter() {
  return ++count;
}

/**
 * 3. Write a function 'Inc' (note the capital I!) that takes a numeric argument x and returns a function that
 * increments by x. That is, the expression Inc(1) would evaluate to a function that behaves like inc.
 *
 * @param {number} x - increment size
 * @returns {function(number)} - increment function that increments `a` by `x`
 */
function Inc( x ) {
  return function ( a ) {
    return a + x;
  };
}

/**
 * 4. Write a function Counter that takes no arguments, and each time it is called, returns a function that operates
 * like the function counter. If Counter is called twice, the two functions returned should be independent of one
 * another, each producing its own series of values unaffected by calls to the other.
 *
 * @returns {function()} - independent counter function
 */
function Counter() {
  return CounterFrom( 0 );
}

/**
 * 5. Write a function CounterFrom that takes a single numeric argument x and returns a function that takes no
 * arguments, and acts as a counter starting from x. That is, on its first invocation, the result function returns
 * x + 1, on its second invocation, the result function returns x + 2; and so on. If CounterFrom is called twice, the
 * two functions returned should be independent of one another, each producing its own series of values unaffected by
 * calls to the other.
 *
 * @param {number} x - starting value of counter
 * @returns {function()} - independent counter function that starts counting at `x`
 */
function CounterFrom( x ) {

  var count = x;

  return function () {
    return ++count;
  }

}

/**
 * 6. Write a function makeArray that takes two numeric arguments n and v, and returns an array of length n, every
 * element of which contains the value v.
 *
 * @param {number} n - number of elements in array
 * @param {number} v - value of each element in array
 * @returns {Array.<number>} - array of n elements, each element of value v
 */
function makeArray( n, v ) {
  return carefulMakeArray( n, v );
}

/**
 * 7. Write a function carefulMakeArray that also takes two numeric arguments n and v, and returns an array. Your
 * function must check whether n is actually a non-negative number. If n is a non-negative number, then carefulMakeArray
 * operates like makeArray. If n is a negative number, then carefulMakeArray throws an exception object, whose name is
 * "BadSize" and whose message is "Negative size". If n is not a number, then carefulMakeArray throws an exception
 * object, whose name is "BadSize" and whose message is "Size is not a number".
 *
 * @param {number} n - number of elements in array
 * @param {number} v - value of each element in array
 * @returns {Array.<number>} - array of n elements, each element of value v
 */
function carefulMakeArray( n, v ) {

  ensureValidSize( n );

  // Initialize fixed-size array
  var a = new Array( n );

  // Populate array
  for ( var i = 0; i < n; i++ ) {
    a[ i ] = v;
  }

  return a;

}

/**
 * 8. Write a function called incArray that takes a numeric argument n and returns an array of functions of length n.
 * Each element of the array is a function like the ones produced by Inc, where the argument to Inc is its position in
 * the array. Use the same checking and exception-throwing behavior as was specified above for carefulMakeArray.
 *
 * @param {number} n - size of inc array
 * @returns {Array.<function(number)>} - array of inc functions
 */
function incArray( n ) {

  ensureValidSize( n );

  // Initialize fixed-size array
  var a = new Array( n );

  // Populate array
  for ( var i = 0; i < n; i++ ) {
    a[ i ] = Inc( i );
  }

  return a;

}

/**
 * 9. Write a function called counterFromArray that takes a numeric argument n and returns an array of functions of
 * length n. Each element of the array is a function like the functions produced by CounterFrom. Each index i of the
 * result array contains CounterFrom(i). Use the same checking and exception-throwing behavior as was specified above
 * for carefulMakeArray.
 *
 * @param {number} n - size of counter array
 * @returns {Array.<function(number)>} - array of counter functions
 */
function counterFromArray( n ) {

  ensureValidSize( n );

  // Initialize fixed-size array
  var a = new Array( n );

  // Populate array
  for ( var i = 0; i < n; i++ ) {
    a[ i ] = CounterFrom( i );
  }

  return a;

}

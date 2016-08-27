/*#!/usr/bin/env node*/

/////////////// Fizz buzz
//## If x is divisable by 3 return 'fizz'
//## If x is divisable by 5 return 'buzz'
//## If x is divisable by 3 & 5 return 'fizz buzz'

exports.fizz_buzz = function(x) {
   if (( (x % 3) == 0 ) && ( (x % 5) == 0 )) {
     return "fizzbuzz";
   }
   else if ( (x % 3) == 0 ) {
       return "fizz";
   }
   else if ( (x % 5) == 0 ) {
       return "buzz";
   }
   else {
       return x;
   }
};

exports.iter = function* ( max_val ) { //generator for fizz_buzz func
    var index = 1;
    var f = require('./src/fizz_buzz');
    while( index <= max_val ) {
        yield f.fizz_buzz( index++ );
    }
};

/*
  isEven
  This function takes a number and returns true or false
  based on whether the number is even or not
*/
const isEven = function(number) {
  return number%2==0;
}


/*
  isOdd
  This function takes a number and returns true or false
  based on whether the number is odd or not
*/
const isOdd = function(number) {
  return !isEven(number);
}


/*
  square
  This function takes a number and returns the mathematical square
  of that number
*/
const square = function(number) {
  return number*number;
}


/*
  cube
  This function takes a number and returns the mathematical cube
  of that number
*/
const cube = function(number) {
  return square(number)*number;
}

/*
  gcd
  This function returns the greatest common divisor of any two numbers
*/
const gcd=function (firstNumber,secondNumber){
 for(let divisor=firstNumber;divisor>=1;divisor--){
   if (firstNumber%divisor==0&&secondNumber%divisor==0){
     return divisor;
   }
 }
}

/*
  lcm
  This function returns the least common multiple of any two numbers
*/
const lcm = function(firstNumber,secondNumber) {
  return (firstNumber*secondNumber)/gcd(firstNumber,secondNumber);
}


/*
  simpleInterest
  This function returns the simple interest calculated when given
  principle, period and rate of interest(in that order)
*/
const simpleInterest = function(principle,period,rate) {
  return (principle*period*rate)/100;
}


/*
  compoundInterest
  This function returns the simple interest calculated when given
  principle, period and rate of interest annually(in that order)
*/

/*
  greatestOf
  This function returns the greatest of three numbers
*/


/*
  averageOf
  This function returns the average of three numbers
*/


exports.isEven=isEven;
exports.isOdd=isOdd;
exports.square=square;
exports.cube=cube;
exports.gcd=gcd;
exports.lcm=lcm;
exports.simpleInterest=simpleInterest;
exports.compoundInterest=compoundInterest;
exports.greatestOf=greatestOf;
exports.averageOf=averageOf;

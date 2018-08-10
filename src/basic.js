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
const compoundInterest = function (principle, noOfYears, rate, compFreq) {
 compFreq = (compFreq) ? compFreq : 1;
 let comp = Math.floor(noOfYears * compFreq);
 return principle * Math.pow(((100 + rate / compFreq) / 100), comp) - principle;
};

/*
  greatestOf
  This function returns the greatest of three numbers
*/
const greatestOf = function(firstNumber,secondNumber,thirdnumber) {
  if (firstNumber>secondNumber && firstNumber>secondNumber) {
    return firstNumber;
    } else if (secondNumber>firstNumber && secondNumber>thirdnumber) {
      return secondNumber;
    } else {
      return thirdnumber;
    }
}


/*
  averageOf
  This function returns the average of three numbers
*/
const averageOf = function(firstNumber,secondNumber,thirdnumber) {
  return (firstNumber+secondNumber+thirdnumber)/3;
}

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

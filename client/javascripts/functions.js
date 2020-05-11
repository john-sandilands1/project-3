// jshint version 6
//fill an array with the numbers from start to stop, in steps of step
let fillArray = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

//create an array of the numbers 1 - 100
let arrOf1To100 = fillArray(1, 100, 1);

//log the array for inspection
console.log(arrOf1To100);
// bitBatBotOrNot
let bitBatBotOrNot = n => {
  //your code goes here
  let result = "";
  // is n divisible by 3?
  if (n % 3 == 0) {
    result = `${result}Bit`;
  }
  if (n % 5 == 0) {
    result = `${result}Bat`;
  }

  if (n % 7 == 0) {
    result = `${result}Bot`;
  } else result = "Not";
  return result;
};

// findAllbitBatBotOrNots1
let num = [14, 17, 105];
let findAllbitBatBotOrNots1 = arr => {
  num.map(bitBatBotOrNot);
};
// is n divisible by 3?
let bitBatBotOrNot = n => {
  //your code goes here
  let result = "";
  // is n divisible by 3?
  if (n % 3 == 0) {
    result = `${result}Bit`;
  }
  if (n % 5 == 0) {
    result = `${result}Bat`;
  }

  if (n % 7 == 0) {
    result = `${result}Bot`;
  } else result = "Not";
  return result;
};

console.log(num.map(bitBatBotOrNot));

// findAllbitBatBotOrNots2
let num = [14, 17, 105];
let result = new Array();
findAllbitBatBotOrNots2 = num => {
  for (var i = 0; i < num.length; i++) {
    num[i];
    if (num[i] % 3 == 0) {
      result.push("Bit");
    } else if (num[i] % 5 == 0) {
      result.push("Bat");
    } else if (num[i] % 7 == 0) {
      result.push("Bot");
    } else result.push("Not");
  }
  return result;
};

//your code goes here

//use for statement
let num = [14, 17, 105];
let findAllbitBatBotOrNots3 = arr => {
  let num = [14, 17, 105];
  let result = new Array();
  for (let elem of num)
    if (num % 3 == 0) {
      result.push("Bit");
    } else if (num % 5 == 0) {
      result.push("Bat");
    } else if (num % 7 == 0) {
      result.push("Bot");
    } else result.push("Not");
};
return result;

//your code goes here
//use for..of statement
let num = [14, 17, 105];
let findAllbitBatBotOrNots4 = arr => {
  num.forEach(bitBatBotOrNot);
};
// is n divisible by 3?
if (num % 3 == 0) {
  result.push("Bit");
} else if (num % 5 == 0) {
  result.push("Bat");
} else if (num % 7 == 0) {
  result.push("Bot");
} else result.push("Not");

return result;

//your code goes here
//use forEach method

//test the functions

findAllbitBatBotOrNots1(arrOf1To100);

findAllbitBatBotOrNots2(arrOf1To100);

findAllbitBatBotOrNots3(arrOf1To100);

findAllbitBatBotOrNots4(arrOf1To100);

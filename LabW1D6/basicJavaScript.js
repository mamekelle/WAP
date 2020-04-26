function myFunctionTest(expected, found) {
  if (expected === found) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED.  Expected " + expected + " found " + found;
  }
}

const errorMsg = "there is no max";
/* max returns the maximum of 2 arguments */
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  };
}
console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));
console.assert(max(10, 20) === 20, errorMsg);


/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
  return max(max(a, b), c);

}
console.assert(maxOfThree(10, 20, 30) === 30, errorMsg);
console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));

function isVowel(input) {
  if (input === 'a' || input === 'e' || input === 'i' || input === 'o' || input === 'u') {
    return true;
  }
  else {
    return false;
  }
}
console.assert(isVowel('a') === true, "is not vowel");
console.log("Expected output of isVowel('a')  is: true " + myFunctionTest(true, isVowel('a')));

function sum(input) {
  let sum = 0;
  for (i = 0; i < input.length; i++) {
    sum += input[i];
  }
  return sum;
}
console.assert(sum([1, 2, 3]) === 6, "is not correct sum");
console.log("Expected output of sum([1,2,3])  is:  6 " + myFunctionTest(6, sum([1, 2, 3])));

function multiply(input) {
  let multiply = 1;
  for (i = 0; i < input.length; i++) {
    multiply *= input[i];
  }
  return multiply;
}
console.assert(sum([1, 2, 3]) === 6, "is not correct multiply");
console.log("Expected output of multiply([1,2,3])  is:  6 " + myFunctionTest(6, multiply([1, 2, 3])));

function reverseString(input) {
  if (input.length > 1) {
    let reverseString = input.charAt(input.length - 1);
    for (i = input.length - 2; i >= 0; i--) {
      reverseString += input[i];
    }
    return reverseString;
  }
  return input;
}

console.assert(reverseString("hello world") === "dlrow olleh", "is not correct reverse");
console.log("Expected output of reverseString(hello) is:  olleh " + myFunctionTest("olleh", reverseString("hello")));

function findLongestWord(input) {
  let max = 0;
  for (i = 0; i < input.length; i++) {
    if (input[i].length > max)
      max = input[i].length;
  }
  return max;
}
console.assert(findLongestWord(["hello","abc","12"]) === 5, "is not correct Longest word!");
console.log("Expected output of findLongestWord([\"hello\",\"abc\",\"12\"]) is:  5 "
 + myFunctionTest(5, findLongestWord(["hello","abc","12"])));

 function findLongestWords(input,length) {
  let maxArray=[], count=0;
  for (i = 0; i < input.length; i++) {
    if (input[i].length > length){
      maxArray[count] = input[i];
      count++;
    }

  }
  return maxArray;
}

console.assert(findLongestWords(["hello","abc","12"],2)[0] === "hello", "is not correct list of Longest words!");
console.log("Expected output of findLongestWords([\"hello\",\"abc\",\"12\"],2) is:  [\"hello\", \"abc\"] "
 + myFunctionTest("hello", findLongestWords(["hello","abc","12"],2)[0]));

const a = [1,3,5,3,3]; 
const b = a.map(function(elem, i, array) {
  return elem * 10;
})
console.log("The map value equals: " +b);
console.assert(b[0] === 10, "is not correct multiply");

const c = a.filter(function(elem, i, array){
  return elem === 3;});
console.log("The filter value equals: " +c);
console.assert(c[0] === 3, "is not correct filter");

  const d = a.reduce(function(prevValue, elem, i, array){
  return prevValue * elem;
});
console.log("The reduce value equals: " +d);
console.assert(d === 135, "is not correct reduce");


function countPositivesSumNegatives(input) {
  //Start coding here
  let countPos = 0;
  let sumNegative = 0;

  if (Array.isArray(input)) {
    if (input.length > 0 && Array.isArray(input) === true) {
      for (i of input) {
        if (i > 0) {
          countPos++;
        } else if (i < 0) {
          sumNegative += i;
        }
      }

      return [countPos, sumNegative];
    }
    //ถ้า input เป็น Array ว่างหรือเป็น null ให้ Return []
    else if (
      input === null ||
      (input.length === 0 && Array.isArray(input) === true)
    ) {
      return [];
    }
  }

  //Ref to let result2 = countPositivesSumNegatives("");
  else {
    return [];
  }
}

let result1 = countPositivesSumNegatives([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
]);
console.log(result1); // [10, -65]

let result2 = countPositivesSumNegatives("");
console.log(result2); // []

//test
let result3 = countPositivesSumNegatives();
console.log(result3); // []

let result4 = countPositivesSumNegatives(456645);
console.log(result4); // []

let result5 = countPositivesSumNegatives([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,0,1,0,0,0,-99
]);
console.log(result5); 

let result6 = countPositivesSumNegatives([]);
console.log(result6); 


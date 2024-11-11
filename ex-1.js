function fizzBuzz(n) {
  //Start coding here
  let result = [];
  //รับ Parameter 1 ตัวคือ n เป็นจำนวนเต็มบวก
  if (typeof n === "number" && n > 0) {
    for (let i = 1; i <= n; i++) {
      
      //ถ้าตำแหน่งของสมาชิกหารด้วย 3 ลงตัว ให้ใส่ "Fizz" แทนตัวเลข
      if (i % 3 === 0 && i % 5 !== 0) {
        result.push("Fizz");
      }

      //ถ้าตำแหน่งของสมาชิกหารด้วย 5 ลงตัว ให้ใส่ "Buzz" แทนตัวเลข
      else if (i % 3 !== 0 && i % 5 === 0) {
        result.push("Buzz");
      }

      //ถ้าตำแหน่งของสมาชิกหารด้วยทั้ง 3 และ 5 ลงตัว ให้ใส่ "FizzBuzz" แทนตัวเลข
      else if (i % 3 === 0 && i % 5 === 0) {
        result.push("FizzBuzz");
      }

      //ในกรณีอื่นๆ ให้ใส่ตัวเลขของตำแหน่งนั้นเป็น String
      else result.push(i.toString());
    }
    return result;
  } 
  
  else {
    return "input is incorrect ";
  }
}

let result1 = fizzBuzz(3);
console.log(result1); // ["1","2","Fizz"]

let result2 = fizzBuzz(5);
console.log(result2); // ["1","2","Fizz","4","Buzz"]

let result3 = fizzBuzz(15);
console.log(result3); // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

let x = fizzBuzz("");
console.log(x);

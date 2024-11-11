function validatePIN(pin) {
  //Start coding here
  const regex = /^\d+$/;

  //let type=typeof(pin);
  //console.log(type);

  //รับ Parameter 1 ตัวคือ pin มี Value Type เป็น String
  //ถ้า PIN ที่รับเข้ามาถูกต้อง (มีเฉพาะตัวเลข 4 หลักหรือ 6 หลักเท่านั้น) จะ Return

  //check is String
  //check length 4 or 6
  if (typeof pin === "string" && (pin.length === 4 || pin.length === 6)) {
    //PIN ต้องประกอบด้วยตัวเลขเท่านั้น
    return regex.test(pin);
  }

  //ถ้า PIN ไม่ถูกต้อง จะ Return false
  else return false;
}

let result1 = validatePIN("1234");
console.log(result1); // true

let result2 = validatePIN("12345");
console.log(result2); // false

let result3 = validatePIN("a234");
console.log(result3); // false

// test at 6 digits
let result4 = validatePIN("123456");
console.log(result4); // false

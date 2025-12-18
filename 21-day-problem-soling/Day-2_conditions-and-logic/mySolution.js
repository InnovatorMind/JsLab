// 1. **Find the Maximum of Three Numbers**
function maxInThreeNum(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > result) {
      result = arr[i];
    }
  }
  return result;
}
let arr = [20, 4, 22, 45, 23, 54, 64];
console.log(maxInThreeNum(arr));

//===================================================================
console.log("======================================================");
//===================================================================

function posNegOrZero(num) {
  if (num > 0) console.log("positive!!!");
  else if (num < 0) console.log("negative!!!");
  else console.log("Zero");
}
// print
posNegOrZero(45);

//===================================================================
console.log("======================================================");
//===================================================================

function calculateElec(units) {
  let totalBill = 0;
  if (units <= 100) {
    totalBill = units * 5;
  } else if (units <= 200) {
    totalBill = 100 * 5 + (units - 100) * 7;
  } else if (units <= 300) {
    totalBill = 100 * 5 + 100 * 7 + (units - 200) * 10;
  } else {
    totalBill = 100 * 5 + 100 * 7 + 100 * 10 + (units - 300) * 12;
  }

  console.log(`Total Bill = ${totalBill}`);
}
calculateElec(230);

//===================================================================
console.log("======================================================");
//===================================================================

function isThisVowel(para) {
  para = para.toLowerCase();
  if (para == "a" || para == "e" || para == "i" || para == "o" || para == "u") {
    console.log("Yes!");
  } else {
    console.log("No!");
  }
}
// print
isThisVowel("a");
isThisVowel("p");
isThisVowel("e");

//===================================================================
console.log("======================================================");
//===================================================================
//===================================================================
// *Check if a Year is a Leap Year**
function leapYear(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    // console.log(year);
    return "Yes";
  }
  return "NO";
}
console.log(leapYear(2024));
console.log(leapYear(1900));
console.log(leapYear(2000));

console.log("======================================================");
//===================================================================
// **Check if a Character is Uppercase, Lowercase, Digit, or Special Character**

function checkTriangle(a, b, c) {
  if (a * a + b * b == c * c) console.log("Right Angled!");
  else if (a == b && b == c) console.log("Equilateral");
  else if (a == b || b == c || c == a) console.log("Isosceles");
  else console.log("Scalene");
}
// print
checkTriangle(11, 11, 11);
checkTriangle(3, 4, 5);
checkTriangle(5, 4, 5);
checkTriangle(2, 4, 5);

//===================================================================
console.log("======================================================");
//===================================================================
// 2. **Check Triangle Type Using Sides and Angles**
function checkIt(para) {
  const code = para.charCodeAt(0);
  //   console.log(code);

  if (code >= 65 && code <= 90) console.log("Uppercase!");
  else if (code >= 97 && code <= 122) console.log("Lowercase!");
  else if (code >= 48 && code <= 57) console.log("Digits!");
  else console.log("Special Character!");
}
// print
checkIt("a");

//===================================================================
console.log("======================================================");
//===================================================================
// 3. **Calculate Income Tax Based on Slabs**

function calculateIncome(income) {
  let tax = 0;
  if (income <= 250000) {
    console.log("NO TAX!");
    return 0;
  }
  if (income > 250000) {
    let slab = Math.min(income - 250000, 250000);
    tax += slab * 0.05;
  }
  if (income > 500000) {
    let slab = Math.min(income - 500000, 500000);
    tax += slab * 0.2;
  }
  if (income > 1000000) {
    tax += (income - 1000000) * 0.3;
  }

  return tax;
}
// print
console.log(calculateIncome(750000));

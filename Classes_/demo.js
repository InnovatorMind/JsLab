// ============= Simple ============= //
// class Person1 {
//   userName = "Anony"; //public
//   #balance = 0; // private
  
//   greet() {
//     console.log(`Hi, I am a robo.`);
//     return "";
//   }
// }
// const myInfo1 = new Person1();
// console.log(myInfo1); // Person1 {}
// console.log(myInfo1.userName); //Anony
// console.log(myInfo1.greet()); // Hi, I am a robo.

// ==================================== //
class BankAccount {
  #balance = 0; // private

  deposit(amount) {
    this.#balance += amount;
  }

  get balance() {
    return this.#balance;
  }
}

const acc = new BankAccount();
acc.deposit(100);
console.log(acc.balance); // ✔️ 100
// console.log(acc.#balance); // ❌ SyntaxError: Private field


// ============= With Arguments ============= //
// class Student {
//   // instance variable with default value
//   _marks = 0;

//   // getter
//   get marks() {
//     console.log("Getting marks...");
//     return this._marks;
//   }

//   // setter
//   set marks(value) {
//     console.log("Setting marks...");
//     if (value < 0 || value > 100) {
//       console.log("Invalid marks. Must be between 0 and 100.");
//     } else {
//       this._marks = value;
//     }
//   }
// }

// const s1 = new Student();

// s1.marks = 95; // Setting marks...
// console.log(s1.marks); // Getting marks... → 95

// s1.marks = 150; // Setting marks... → Invalid marks.

// ========= With Constructor ============ //
// class Person2 {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log(`Hi, I am ${this.name} and I'm ${this.age} years old.`);
//   }
// }

// const myInfo2 = new Person2("Joe", 18);
// console.log(myInfo2);

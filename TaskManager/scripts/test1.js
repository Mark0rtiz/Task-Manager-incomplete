//dog constructor
function Dog(name, age, color) {
  this.name = name;
  this.age = age;
  this.color = color;
}

//3 - class
class Cat {
  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
  }
}

function testObjects() {
  console.log("Test Objects");

  // 1- object literal (not reusable)
  let mark = {
    name: "Mark",
    age: 30,
    skill: "trash",
  };
  console.log(mark);
}

// 2 object constructor
let dog3 = new Dog("courage", 5, "pink");
console.log(dog3);

let dog4 = new Dog("pepecito", 7, "Black");
console.log(dog4);

// 3 - class
let cat1 = new Cat("bruno", 2, "brown");
console.log(cat1);

//test case
testObjects();

const title = document.getElementById("title");

console.log(title);

let realName = "태혁";
console.log(realName);

let crazyMan = "crazy";

console.log("take it easy " + crazyMan);

crazyMan = "lazy";

console.log("take it easy " + crazyMan);
//ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

console.log(daysOfWeek[2]);

//get item from Array
console.log(daysOfWeek);

//Add one monre day to the Array
daysOfWeek.push("sun");

console.log(daysOfWeek);

const player = {
  name: "chaewon",
  points: 77777,
  pretty: true,
  balance: "perfect",
};

console.log(player);
console.log(player.name);

player.dance = "perfect";
player.points = player.points + 20;
console.log(player);

// #2.7

function sayHello() {
  console.log("Hello my name is ");
}

sayHello();
sayHello();
sayHello();

///////////

function sayHelloq(nameOfPerson, age) {
  console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}
sayHelloq("nico", 10);
sayHelloq("dal", 23);
sayHelloq("lynn", 21);

//////////////

function plus(fisrstNumber, secondNumer) {
  console.log(fisrstNumber + secondNumer);
}

plus(8, 20);
plus(8, 210);
plus(89, 20);

const user = {
  name: "nico",
  sayHello: function (otherPersonName) {
    console.log("hello! " + otherPersonName);
  },
};

console.log(user.name);
user.sayHello("lynn");

const cal = {
  add: function (a, b) {
    console.log(a + b);
  },
  minus: function (c, d) {
    console.log(c - d);
  },
};

cal.add(100, 20);
cal.minus(200, 100);

const calculate = {
  plus: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  double: function (a, b) {
    console.log(a * b);
  },
  divide: function (a, b) {
    console.log(a / b);
  },
  power: function (a, b) {
    console.log(a ** b);
  },
};

calculate.plus(10, 20);
calculate.minus(200, 100);
calculate.double(20, 30);
calculate.divide(50, 10);
calculate.power(2, 3);

const year = 96;
function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}

const krAge = calculateKrAge(year);
console.log(krAge);

const calculating = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  double: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

const plusResult = calculating.plus(2, 3);
const minusResult = calculating.minus(plusResult, 10);
const doubleResult = calculating.double(minusResult, 5);
const divideResult = calculating.divide(doubleResult, plusResult);
const powerResult = calculating.power(doubleResult, 3);

const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
  console.log("Please write a real positive numeber");
} else if (age < 18) {
  console.log("You are too young");
} else if (age >= 18 && age <= 50) {
  console.log("you can drink");
} else if (age > 50 && age <= 80) {
  console.log("You should exercise");
} else if (age === 100) {
  console.log("Wow you are wise");
} else if (age > 80) {
  console.log("You can do whatever you want");
}

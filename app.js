//different
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

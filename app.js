const imFat = false;
let realName = "태혁";
console.log(realName);

const a = 10;
const b = 200;
let crazyMan = "crazy";

console.log(a * b * b);
console.log(a + b);
console.log(b - a);
console.log(a - b);

console.log("take it easy " + crazyMan);

crazyMan = "lazy";

console.log("take it easy " + crazyMan);

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

const nonsense = [1, 2, "hello", true, false, null];

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

var nombres = ["Sebastian", "Alejandra", "Miguel", "Pepe", "Esteban"];

nombres.forEach(nameList);

function nameList(item, index) {
    document.getElementById("foreach").innerHTML += index + ":" + item + "<br>";
}

var ages = [11, 32, 44, 49, 8];

function checkAdult(age) {
  return age >= 18;
}

function mayorAge() {
  document.getElementById("filter").innerHTML = ages.filter(checkAdult);
}

var numbers = [4, 9, 16, 25];

function raiz() {
  x = document.getElementById("map")
  x.innerHTML = numbers.map(Math.sqrt);
}

var ages2 = [9, 7, 18, 20, 17];

function checkAdult(age2) {
  return age2 >= 18;
}

function findAge() {
  document.getElementById("find").innerHTML = ages2.find(checkAdult);
}

var ages3 = [13, 1, 18, 20, 35];

function checkAdult2(age3) {
  return age3 >= 18;
}

function arrayElem() {
  document.getElementById("findIndex").innerHTML = ages3.findIndex(checkAdult2);
}

var num =[1, 2, 3, 4];

function trueElem() {
  document.getElementById("includes").innerHTML = num.includes(2);
}

var champs = [
  {name: 'Ashe', type: 'AD carry'},
  {name: 'Sett', type: 'TOP laner'},
  {name: 'Kindred', type: 'jungler'}
];

var names = _.pluck(champs, 'name');

console.log(names);






  
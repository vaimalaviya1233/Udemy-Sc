var selectors = ["#post-1378 > div.post-content > center > button > a"];
// generate all number from 1000 to 1500
var numbers = [];
for (var i = 1000; i <= 1500; i++) {
  numbers.push(i);
  selectors.push("#post-" + i + " > div.post-content > center > button > a");
}

var randomNumber = Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000;
// generate random number of selector
var randomSelector = Math.floor(Math.random() * selectors.length);
console.log(randomNumber);

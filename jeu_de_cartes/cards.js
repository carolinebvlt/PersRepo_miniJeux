// var cards = ["1a","1b","1c","1d","2a","2b","2c","2d","3a","3b","3c",
//   "3d","4a","4b","4c","4d","5a","5b","5c","5d","6a","6b","6c","6d",
//   "7a","7b","7c","7d","8a","8b","8c","8d","9a","9b","9c","9d","10a",
//   "10b","10c","10d","11a","11b","11c","11d","12a","12b","12c","12d",
//   "13a","13b","13c","13d"
// ];






function mixCards(){
  var cards = ["a", "b", "c", "d"]
  var mixed = [];
  var i = 4;
  while (cards.length > 0) {
    var random = Math.floor(Math.random() * (i - 0) + 0);
    mixed.push(cards[random]);
    cards.splice(random, 1);
    i--;
  }
  console.log(mixed);
}

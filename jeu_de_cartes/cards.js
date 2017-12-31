var player1 = {};
var player2 = {};
var players = [player1, player2];
var flop1, flop2, flop3, turn, river;
/*---------------------------------------------------------------------*/

function play(){
  var mc = mixCards();
  giveCards(mc);
  flop(mc);
  river(mc);
}

/*---------------------------------------------------------------------*/
function mixCards(){
  let cards = ["1a","1b","1c","1d","2a","2b","2c","2d","3a","3b","3c",
    "3d","4a","4b","4c","4d","5a","5b","5c","5d","6a","6b","6c","6d",
    "7a","7b","7c","7d","8a","8b","8c","8d","9a","9b","9c","9d","10a",
    "10b","10c","10d","11a","11b","11c","11d","12a","12b","12c","12d",
    "13a","13b","13c","13d"
  ];
  let mixed = [];
  let i = 52;
  while (cards.length > 0) {
    var random = Math.floor(Math.random() * (i - 0) + 0);
    mixed.push(cards[random]);
    cards.splice(random, 1);
    i--;
  }
  return mixed;
}

function giveCards(mc){
  player1.card1 = mc[0];
  player1.card2 = mc[1];
  player2.card1 = mc[2];
  player2.card2 = mc[3];
}
function flop(mc){
  flop1 = mc[5];
  flop2 = mc[6];
  flop3 = mc[7];
}
function turn(mc){
  turn = mc[9];
}
function river(mc){
  river = mc[11];
}

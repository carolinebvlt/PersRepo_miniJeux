var player1 = {};
var player2 = {};
var players = [player1, player2];
var flop1, flop2, flop3, turn, river;

/*---------------------------------------------------------------------*/

function play(){
  var mc = mixCards();
  giveCards(mc);
  flop(mc);
  turn(mc);
  river(mc);
  players.forEach(function(e){
    checkHand(e);
  });

}

/*---------------------------------------------------------------------*/
function mixCards(){
  let cards = ["01a","01b","01c","01d","02a","02b","02c","02d","03a","03b","03c",
    "03d","04a","04b","04c","04d","05a","05b","05c","05d","06a","06b","06c","06d",
    "07a","07b","07c","07d","08a","08b","08c","08d","09a","09b","09c","09d","10a",
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

/*---------------------------------------------------------------------*/
function checkHand(e){
  var cf1 = flop1[2],
      cf2 = flop2[2],
      cf3 = flop3[2],
      ct = turn[2],
      cr = river[2],
      cc1 = e.card1[2],
      cc2 = e.card2[2];
  var z = (cf1 + cf2 + cf3 + ct + cr + cc1 + cc2);
  let countA = 0, countB = 0, countC = 0, countD = 0;
  for(var i = 0; i < z.length; ++i){
      if(z[i] == 'a')
          countA++;
      if(z[i] == 'b')
          countB++;
      if(z[i] == 'c')
          countC++;
      if(z[i] == 'd')
          countD++;
  }
  console.log(countA);
  console.log(countB);
  console.log(countC);
  console.log(countD);

  /*Quinte flush royale*/
  if ( (countA == 5 || countB == 5 || countC == 5 || countD == 5) && () ) {
  }
  else {
  }
  /*Quinte flush*/
  if ( (countA == 5 || countB == 5 || countC == 5 || countD == 5) && () ) {
  }
  else {
  }
  /*Carré*/
  /*Full*/
  /*Couleur*/
  if ((countA == 5 || countB == 5 || countC == 5 || countD == 5)) {
    console.log('couleur');
  }
  else {
    console.log('no color');
  }
  /*Quinte*/
  /*Brelan*/
  /*Double pair*/
  /*pair*/
  /*Hauteur*/
}

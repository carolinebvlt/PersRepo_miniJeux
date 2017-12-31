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
  let sevenCards = [flop1, flop2, flop3, turn, river, e.card1, e.card2];
  let cardsValue = [];
  let cardsColor = [];
  let countA = 0, countB = 0, countC = 0, countD = 0;
  let count1 = 0, count2 = 0, count3 = 0, count4 = 0, count5 = 0,
      count6 = 0, count7 = 0, count8 = 0, count9 = 0, count10 = 0,
      count11 = 0, count12 = 0, count13 = 0;
  sevenCards.forEach(function(elem){
    let y = elem.substr(0,2);
    cardsValue.push(y);
    let x = elem.substr(2,1);
    cardsColor.push(x);
  });
  cardsColor.forEach(function(elem){
    if(elem == 'a')
        countA++;
    if(elem == 'b')
        countB++;
    if(elem == 'c')
        countC++;
    if(elem == 'd')
        countD++;
  });
  cardsValue.forEach(function(elem){
    if(elem == '01')
        count1++;
    if(elem == '02')
        count2++;
    if(elem == '03')
        count3++;
    if(elem == '04')
        count4++;
    if(elem == '05')
        count5++;
    if(elem == '06')
        count6++;
    if(elem == '07')
        count7++;
    if(elem == '08')
        count8++;
    if(elem == '09')
        count9++;
    if(elem == '10')
        count10++;
    if(elem == '11')
        count11++;
    if(elem == '12')
        count12++;
    if(elem == '13')
        count13++;
  });

  /*Quinte flush royale*/
  // if ( (countA == 5 || countB == 5 || countC == 5 || countD == 5) && () ) {
  // }
  // else {
  // }
  // /*Quinte flush*/
  // if ( (countA == 5 || countB == 5 || countC == 5 || countD == 5) && () ) {
  // }
  // else {
  // }
  // /*Carré*/
  // /*Full*/
  // /*Couleur*/
  // if ((countA == 5 || countB == 5 || countC == 5 || countD == 5)) {
  //   console.log('couleur');
  // }
  // else {
  //   console.log('no color');
  // }
  /*Quinte*/
  /*Brelan*/
  /*Double pair*/
  /*pair*/
  /*Hauteur*/
}

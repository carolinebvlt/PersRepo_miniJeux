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

/*--------------------------------DEALER-------------------------------------*/
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

/*--------------------------CHECKHAND-------------------------------------------*/
function checkHand(e){
  var sevenCards = [flop1, flop2, flop3, turn, river, e.card1, e.card2];
  var cardsValues = [], cardsColors = [];
  var countA = 0, countB = 0, countC = 0, countD = 0;

  var countsValues =[];
  var count1 = 0, count2 = 0, count3 = 0, count4 = 0, count5 = 0,
      count6 = 0, count7 = 0, count8 = 0, count9 = 0, count10 = 0,
      count11 = 0, count12 = 0, count13 = 0;
  var sortedValues, sortedValuesInt = [];

  sevenCards.forEach(function(e){
    let x = e.substr(2,1);
    cardsColors.push(x);
    let y = e.substr(0,2);
    cardsValues.push(y);
  });
  cardsColors.forEach(function(e){
    if(e == 'a')
        countA++;
    if(e == 'b')
        countB++;
    if(e == 'c')
        countC++;
    if(e == 'd')
        countD++;
  });
  cardsValues.forEach(function(e){
    if(e == '01')
        count1++;
    if(e == '02')
        count2++;
    if(e == '03')
        count3++;
    if(e == '04')
        count4++;
    if(e == '05')
        count5++;
    if(e == '06')
        count6++;
    if(e == '07')
        count7++;
    if(e == '08')
        count8++;
    if(e == '09')
        count9++;
    if(e == '10')
        count10++;
    if(e == '11')
        count11++;
    if(e == '12')
        count12++;
    if(e == '13')
        count13++;
  });
  countsValues.push(count1);
  countsValues.push(count2);
  countsValues.push(count3);
  countsValues.push(count4);
  countsValues.push(count5);
  countsValues.push(count6);
  countsValues.push(count7);
  countsValues.push(count8);
  countsValues.push(count9);
  countsValues.push(count10);
  countsValues.push(count11);
  countsValues.push(count12);
  countsValues.push(count1);
  sortedValues = cardsValues.sort();
  sortedValues.forEach(function(e){
    sortedValuesInt.push(Number(e));
  });
  checkPair(countsValues);
}
/*-----------------------------CHECK----------------------------------------*/
function checkHauteur(tab){

}
function checkPair(tab){
  var pair = false;
  for (var i = tab.length-1; i >= 0; i--) {
    if(tab[i]>=2){
      pair = true;
      break;
    }
  }
  return pair;
}
function checkBrelan(tab){
  var brelan = false;
  for (var i = tab.length-1; i >= 0; i--) {
    if(tab[i]>=3){
      brelan = true;
      break;
    }
  }
  return brelan;
}
function checkQuinte(tab){
  let i = tab.length-1;
  while(i >= 0){
    if((tab[i]==tab[i-1]+1)&&(tab[i-1]==tab[i-2]+1)&&(tab[i-2]==tab[i-3]+1)&&(tab[i-3]==tab[i-4]+1)) {
      console.log('quinte');
      break;
    }
    else{
      console.log('no quinte');
    }
    i--;
  }
}
function checkCouleur(tab){
  if (countA == 5 || countB == 5 || countC == 5 || countD == 5) {
    console.log('couleur');
  }
  else {
    console.log('no color');
  }
}
function checkCarre(tab){

}
/*---------------------------------------------------------------------*/
function checkDoublePair(tab){

}
function checkFull(tab){

}
function checkQuinteFlush(tab){

}
function checkQuinteFlushRoyale(tab){

}

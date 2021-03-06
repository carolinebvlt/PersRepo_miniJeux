var player1 = {}, player2 = {}, player3 = {},
    player4 = {}, player5 = {}, player6 = {};
var players = [player1, player2, player3, player4, player5, player6];
var flop1, flop2, flop3, turn, river;
var Flop1 = document.getElementById('Flop1');
var Flop2 = document.getElementById('Flop2');
var Flop3 = document.getElementById('Flop3');
var Turn = document.getElementById('Turn');
var River = document.getElementById('River');
var Flop1Nbr = document.getElementById('Flop1Nbr');
var Flop2Nbr = document.getElementById('Flop2Nbr');
var Flop3Nbr = document.getElementById('Flop3Nbr');
var TurnNbr = document.getElementById('TurnNbr');
var RiverNbr = document.getElementById('RiverNbr');
var pers1Card1 = document.getElementById('pers1Card1');
var pers1Card2 = document.getElementById('pers1Card2');
var pers2Card1 = document.getElementById('pers2Card1');
var pers2Card2 = document.getElementById('pers2Card2');
var pers3Card1 = document.getElementById('pers3Card1');
var pers3Card2 = document.getElementById('pers3Card2');
var pers4Card1 = document.getElementById('pers4Card1');
var pers4Card2 = document.getElementById('pers4Card2');
var pers5Card1 = document.getElementById('pers5Card1');
var pers5Card2 = document.getElementById('pers5Card2');
var pers6Card1 = document.getElementById('pers6Card1');
var pers6Card2 = document.getElementById('pers6Card2');
var pers1Card1Nbr = document.getElementById('pers1Card1Nbr');
var pers1Card2Nbr = document.getElementById('pers1Card2Nbr');
var pers2Card1Nbr = document.getElementById('pers2Card1Nbr');
var pers2Card2Nbr = document.getElementById('pers2Card2Nbr');
var pers3Card1Nbr = document.getElementById('pers3Card1Nbr');
var pers3Card2Nbr = document.getElementById('pers3Card2Nbr');
var pers4Card1Nbr = document.getElementById('pers4Card1Nbr');
var pers4Card2Nbr = document.getElementById('pers4Card2Nbr');
var pers5Card1Nbr = document.getElementById('pers5Card1Nbr');
var pers5Card2Nbr = document.getElementById('pers5Card2Nbr');
var pers6Card1Nbr = document.getElementById('pers6Card1Nbr');
var pers6Card2Nbr = document.getElementById('pers6Card2Nbr');
var btnPlay = document.getElementById('btnPlay');
var btns = document.getElementById('btns');


/*---------------------------------------------------------------------------*/

function play(){
  btnPlay.style.display = "none";
  btns.style.display = "block";
  var mc = mixCards();
  giveCards(mc);
  flop(mc);
  turn(mc);
  river(mc);
  setCardsView(
    [flop1, flop2, flop3, turn, river, player1.card1, player1.card2, player2.card1, player2.card2, player3.card1, player3.card2,
     player4.card1, player4.card2, player5.card1, player5.card2, player6.card1, player6.card2,],
    [Flop1, Flop2, Flop3, Turn, River, pers1Card1, pers1Card2, pers2Card1, pers2Card2, pers3Card1, pers3Card2,
      pers4Card1, pers4Card2, pers5Card1, pers5Card2, pers6Card1, pers6Card2,],
    [Flop1Nbr, Flop2Nbr, Flop3Nbr, TurnNbr, RiverNbr, pers1Card1Nbr, pers1Card2Nbr, pers2Card1Nbr, pers2Card2Nbr, pers3Card1Nbr, pers3Card2Nbr,
      pers4Card1Nbr, pers4Card2Nbr, pers5Card1Nbr, pers5Card2Nbr, pers6Card1Nbr, pers6Card2Nbr])
  players.forEach(function(e){
    checkHand(e);
  });
}

/*--------------------------------DEALER-------------------------------------*/
function mixCards(){
  let cards = ["01a","01b","01c","01d","02a","02b","02c","02d","03a",
    "03b","03c","03d","04a","04b","04c","04d","05a","05b","05c","05d",
    "06a","06b","06c","06d","07a","07b","07c","07d","08a","08b","08c",
    "08d","09a","09b","09c","09d","10a","10b","10c","10d","11a","11b",
    "11c","11d","12a","12b","12c","12d","13a","13b","13c","13d"
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
  player3.card1 = mc[4];
  player3.card2 = mc[5];
  player4.card1 = mc[6];
  player4.card2 = mc[7];
  player5.card1 = mc[8];
  player5.card2 = mc[9];
  player6.card1 = mc[10];
  player6.card2 = mc[11];
}
function flop(mc){
  flop1 = mc[13];
  flop2 = mc[14];
  flop3 = mc[15];
}
function turn(mc){
  turn = mc[17];
}
function river(mc){
  river = mc[19];
}

/*-------------------------------CARDSVIEW(AM FOR...IN)-----------------------------------*/
function setCardsView(tab1, tab2, tab3){ // ["01c"], [divById], [asideById]
  for (var i = 0; i < tab1.length; i++) {
    console.log('tab1 = '+tab1[i]+ ' tab2 = '+tab2[i] + ' tab3 = '+tab3[i]);
    let x = tab1[i].substr(2,1);
    switch (x) {
      case 'a': tab2[i].style.backgroundImage = "url('img/cards/carreau.png')"; break;
      case 'b': tab2[i].style.backgroundImage = "url('img/cards/coeur.png')"; break;
      case 'c': tab2[i].style.backgroundImage = "url('img/cards/pique.png')"; break;
      case 'd': tab2[i].style.backgroundImage = "url('img/cards/trefle.png')"; break;
    }
    let z = tab1[i].substr(0,2); // => '01',.. ou '13'
    tab3[i].innerHTML = z;
  }
}

/*-------------------------------CHECKHAND-----------------------------------*/
function checkHand(e){
  var sevenCards = [flop1, flop2, flop3, turn, river, e.card1, e.card2];
  var cardsValues = [], cardsColors = [];
  var countsValues = {count1:0, count2:0, count3:0, count4:0,
                      count5:0, count6:0, count7:0, count8:0,
                      count9:0, count10:0, count11:0,
                      count12:0, count13:0}
  var countsColors = {countA:0, countB:0, countC:0, countD:0};
  var sortedValuesInt = [];

  sevenCards.forEach(function(e){ // => cardsColors[] & cardsValues[]
    let x = e.substr(2,1);
    cardsColors.push(x);
    let y = e.substr(0,2);
    cardsValues.push(y);
  });
  cardsColors.forEach(function(e){ // => countsColors{}
    if(e == 'a')
        countsColors.countA++;
    if(e == 'b')
        countsColors.countB++;
    if(e == 'c')
        countsColors.countC++;
    if(e == 'd')
        countsColors.countD++;
  });
  cardsValues.forEach(function(e){ // => countsValues{}
    if(e == '01')
        countsValues.count1++;
    if(e == '02')
        countsValues.count2++;
    if(e == '03')
        countsValues.count3++;
    if(e == '04')
        countsValues.count4++;
    if(e == '05')
        countsValues.count5++;
    if(e == '06')
        countsValues.count6++;
    if(e == '07')
        countsValues.count7++;
    if(e == '08')
        countsValues.count8++;
    if(e == '09')
        countsValues.count9++;
    if(e == '10')
        countsValues.count10++;
    if(e == '11')
        countsValues.count11++;
    if(e == '12')
        countsValues.count12++;
    if(e == '13')
        countsValues.count13++;
  });

  let sortedValues = cardsValues.sort();
  sortedValues.forEach(function(e){ // => sortedValuesInt[]
    sortedValuesInt.push(Number(e));
  });

  if(checkQuinteFlushRoyale(countsColors, sortedValuesInt)){
    console.log('QFR');
  }
  else{
    if(checkQuinteFlush(countsColors, sortedValuesInt)){
      console.log('QF');
    }
    else{
      if(checkCarre(countsValues)){
        console.log('carre');
      }
      else{
        if(checkFull(countsValues)){
          console.log('full');
        }
        else{
          if(checkCouleur(countsColors)){
            console.log('couleur');
          }
          else{
            if(checkQuinte(sortedValuesInt)){
              console.log('quinte');
            }
            else{
              if(checkBrelan(countsValues)){
                console.log('brelan');
              }
              else{
                if(checkDoublePair(countsValues)){
                  console.log('DP');
                }
                else{
                  if(checkPair(countsValues)){
                    console.log('pair');
                  }
                  else{
                    checkHauteur(sortedValuesInt)
                    console.log('hauteur');
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
/*------------------functions-------------------*/
// a corriger avec des for in
function checkHauteur(tab){
  var iMax = tab.length-1;
  return tab[iMax];
}
function checkPair(tab){
  var pair = false;
  for (var i = tab.length-1; i >= 0; i--) {
    console.log('tab[i] = ' +tab[i]);
    if(tab[i]==2){
      pair = true;
      break;
    }
  }
  return pair;
}
function checkBrelan(tab){
  var brelan = false;
  for (var i = tab.length-1; i >= 0; i--) {
    if(tab[i]==3){
      brelan = true;
      break;
    }
  }
  return brelan;
}
function checkQuinte(tab){
  var quinte = false;
  let i = tab.length-1;
  while(i >= 0){
    if((tab[i]==tab[i-1]+1)
      &&(tab[i-1]==tab[i-2]+1)
      &&(tab[i-2]==tab[i-3]+1)
      &&(tab[i-3]==tab[i-4]+1)) {
      quinte = true;
      break;
    }
    i--;
  }
  return quinte;
}
function checkCouleur(tab){
  var couleur = false;
  if (tab.countA == 5
    || tab.countB == 5
    || tab.countC == 5
    || tab.countD == 5) {
    couleur = true;
  }
  return couleur;
}
function checkCarre(tab){
  var carre = false;
  for (var i = tab.length-1; i >= 0; i--) {
    if(tab[i]==4){
      carre = true;
      break;
    }
  }
  return carre;
}
function checkRoyale(tab){
  if( (tab.indexOf(1)!= -1)&&(tab.indexOf(10)!= -1)
  &&(tab.indexOf(11)!= -1)&&(tab.indexOf(12)!= -1)
  &&(tab.indexOf(13)!= -1) ){
    return true;
  }
}
function checkDoublePair(tab){
 var pair = 0;
 for (var i = tab.length-1; i >= 0; i--) {
   if(tab[i]==2){
     pair++;
   }
 }
 if(pair == 2){
   return true;
 }
}
function checkFull(tab){
  if(checkBrelan(tab) && checkPair(tab)){
    return true;
  }
}
function checkQuinteFlush(tab1, tab2){
  if(checkCouleur(tab1) && checkQuinte(tab2)){
    return true;
  }
}
function checkQuinteFlushRoyale(tab1, tab2){
  if(checkCouleur(tab1) && checkRoyale(tab2)){
    return true;
  }
}
/*---------------------------------------------------------------------*/

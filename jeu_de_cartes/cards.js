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
  var cardsValues = [], cardsColors = [], countsValues =[], countsColors= [];
  var countA = 0, countB = 0, countC = 0, countD = 0;
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
  countsColors.push(countA);
  countsColors.push(countB);
  countsColors.push(countC);
  countsColors.push(countD);
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
  countsValues.push(count13);
  sortedValues = cardsValues.sort();
  sortedValues.forEach(function(e){
    sortedValuesInt.push(Number(e));
  });

  console.log('sevenCards = '+ sevenCards);
  console.log('cardsValues = '+ cardsValues); // trié 3lignes plus haut
  console.log('cardsColors = '+ cardsColors);
  console.log('sortedValues = '+ sortedValues);
  console.log('sortedValuesInt = '+ sortedValuesInt);
  console.log('countsValues = '+ countsValues);
  console.log('countsColors = '+ countsColors);
  console.log('-------------------------');

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
/*-----------------------------CHECK----------------------------------------*/
function checkHauteur(tab){
  var iMax = tab.length-1;
  return tab[iMax];
}
function checkPair(tab){
  var pair = false;
  for (var i = tab.length-1; i >= 0; i--) {
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
    if((tab[i]==tab[i-1]+1)&&(tab[i-1]==tab[i-2]+1)&&(tab[i-2]==tab[i-3]+1)&&(tab[i-3]==tab[i-4]+1)) {
      quinte = true;
      break;
    }
    i--;
  }
  return quinte;
}
function checkCouleur(tab){
  var couleur = false;
  if (tab[0] == 5 || tab[1] == 5 || tab[2] == 5 || tab[3] == 5) {
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
  if( (tab.indexOf(1)!= -1)&&(tab.indexOf(10)!= -1)&&(tab.indexOf(11)!= -1)&&(tab.indexOf(12)!= -1)&&(tab.indexOf(13)!= -1) ){
    return true;
  }
}
/*---------------------------------------------------------------------*/
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

function play(){
  let random1, random2, random3;
  let min = 0;
  let max = 5;
  let screen1 = document.getElementById('screen1');
  let screen2 = document.getElementById('screen2');
  let screen3 = document.getElementById('screen3');
  random1 = Math.floor(Math.random() * (max - min) + min);
  random2 = Math.floor(Math.random() * (max - min) + min);
  random3 = Math.floor(Math.random() * (max - min) + min);
  console.log(random1);
  console.log(random2);
  console.log(random3);

  switch (random1) {
    case 0: screen1.style.backgroundColor = "blue" ; break;
    case 1: screen1.style.backgroundColor = "red" ; break;
    case 2: screen1.style.backgroundColor = "yellow" ; break;
    case 3: screen1.style.backgroundColor = "green" ; break;
    case 4: screen1.style.backgroundColor = "orange" ; break;
    case 5: screen1.style.backgroundColor = "purple" ; break;
  }
  switch (random2) {
    case 0: screen2.style.backgroundColor = "blue" ; break;
    case 1: screen2.style.backgroundColor = "red" ; break;
    case 2: screen2.style.backgroundColor = "yellow" ; break;
    case 3: screen2.style.backgroundColor = "green" ; break;
    case 4: screen2.style.backgroundColor = "orange" ; break;
    case 5: screen2.style.backgroundColor = "purple" ; break;
  }
  switch (random3) {
    case 0: screen3.style.backgroundColor = "blue" ; break;
    case 1: screen3.style.backgroundColor = "red" ; break;
    case 2: screen3.style.backgroundColor = "yellow" ; break;
    case 3: screen3.style.backgroundColor = "green" ; break;
    case 4: screen3.style.backgroundColor = "orange" ; break;
    case 5: screen3.style.backgroundColor = "purple" ; break;
  }
}

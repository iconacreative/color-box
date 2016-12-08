

// function getRandomColor() {
//   // creating a random number between 0 and 255
//   var r = Math.floor(Math.random() * 256);
//   var g = Math.floor(Math.random() * 256);
//   var b = Math.floor(Math.random() * 256);
 
//   // going from decimal to hex
//   var hexR = r.toString(16);
//   var hexG = g.toString(16);
//   var hexB = b.toString(16);
 
//   // making sure single character values are prepended with a "0"
//   if (hexR.length == 1) {
//     hexR = "0" + hexR;
//   }
 
//   if (hexG.length == 1) {
//     hexG = "0" + hexG;
//   }
 
//   if (hexB.length == 1) {
//     hexB = "0" + hexB;
//   }
 
//   // creating the hex value by concatenatening the string values
//   var hexColor = "#" + hexR + hexG + hexB;
   
//   return hexColor.toUpperCase();
// }


var container = document.getElementById('container');
// var myRandomColor = getRandomColor();
var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for(var i = 0; i < 100; i++) {
  var elem = document.createElement('div');
  // calling the function getRandomColor() 
  elem.classList.add('box'); 
  // elem.style.backgroundColor = getRandomColor();

  var rndNum = getRandomInt(1, 4);
  if(rndNum === 1){
    elem.classList.add('red');
  } else if(rndNum === 2){
    elem.classList.add('blue');
  } else if (rndNum === 3){
    elem.classList.add('green');
  } else {
    elem.classList.add('yellow');
  }

  container.appendChild(elem); 
}



// this is Sean's random number 
// var getRandomInt = function(min, max) {
//   Math.floor(Math.random() * (max - min + 1));
//   }
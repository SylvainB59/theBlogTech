// Date et heure

var myVar = setInterval(myTimer, 1000);

function myTimer() {
    var d = new Date();
    document.getElementById("time").innerHTML = Date();
}



// chrono seconde

function timer() {
var h = document.getElementById("chrono").innerHTML;
h++;
document.getElementById("chrono").innerHTML = h;
}
setInterval("timer()", 1000);


// view alt

var myImage = document.getElementsByTagName("img");
var text = document.getElementById("show");

for (var i = 0; i < myImage.length; i++) {
    myImage[i].addEventListener('mouseover',show);
    myImage[i].addEventListener('mouseout',hide);
}

function show(){
  var myAlt = this.alt;
  text.innerHTML = myAlt;
}

function hide(){
  var vide = "";
  text.innerHTML = vide;
}


// confirmation bouton

function confirmation(){
  var myConfirm = "Are you sure??";
  return confirm(myConfirm);
}

var cursorXBefore;
var cursorX = -1;
document.onmousemove = function (pos){
  cursorXBefore = cursorX;
  cursorX = pos.pageX;
  var width = getWidth();
  var firstDiv = width*0.2;
  var secondDiv = firstDiv*2;
  var thirdDiv = secondDiv+firstDiv;
  var fourthDiv = thirdDiv+firstDiv;
  var fifthDiv = fourthDiv+firstDiv;
  if(cursorX<firstDiv && (cursorXBefore>=firstDiv || cursorXBefore<0)){
    document.getElementById("div1").style.animation = "slideOutFromtop 1s forwards";
    if(cursorXBefore>=firstDiv){
      setStyle(2);
    }
    console.log("first");
  }else if((cursorX>=firstDiv && cursorX<secondDiv) && (cursorXBefore<firstDiv || cursorXBefore>=secondDiv)){
    document.getElementById("div2").style.animation = "slideOutFromtop 1s forwards";
    if(cursorXBefore<firstDiv){
      setStyle(1);
    }else{
      setStyle(3);
    }
    console.log("second");

  }else if((cursorX>=secondDiv && cursorX<thirdDiv) && (cursorXBefore<secondDiv || cursorXBefore>=thirdDiv)){
    document.getElementById("div3").style.animation = "slideOutFromtop 1s forwards";
    if(cursorXBefore<secondDiv){
      setStyle(2);
    }else{
      setStyle(4);
    }
    console.log("third");

  }else if((cursorX>=thirdDiv && cursorX<fourthDiv) && (cursorXBefore<thirdDiv || cursorXBefore>=fourthDiv)){
    document.getElementById("div4").style.animation = "slideOutFromtop 1s forwards";
    if(cursorXBefore<thirdDiv){
      setStyle(3);
    }else{
      setStyle(5);
    }
    console.log("fourth");

  }else if((cursorX>=fourthDiv && cursorX<fifthDiv) && (cursorXBefore<fourthDiv || cursorXBefore>=fifthDiv)){
    document.getElementById("div5").style.animation = "slideOutFromtop 1s forwards";
    if(cursorXBefore<fourthDiv){
      setStyle(4);
    }
    console.log("fifth ");

  }
}

function setStyle(pos){
  switch(pos){
    case 1:
      document.getElementById("div1").style.animation = "1s ease-out 0s 1 slideInFromtop";
      return;
    case 2:
      document.getElementById("div2").style.animation = "1s ease-out 0s 1 slideInFromtop";
      return;
    case 3:
      document.getElementById("div3").style.animation = "1s ease-out 0s 1 slideInFromtop";
      return;
    case 4:
      document.getElementById("div4").style.animation = "1s ease-out 0s 1 slideInFromtop";
      return;
    case 5:
      document.getElementById("div5").style.animation = "1s ease-out 0s 1 slideInFromtop";
      return;

  }
}

function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

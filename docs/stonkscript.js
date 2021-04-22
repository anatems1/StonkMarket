function init() {
  drawcanva();
  theme();
  topmovers();
  noreload();
}

/*GLOBAL VARIABLES********%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/
stock = ['GME', 'DOGE', 'AAPL', 'TSLA', 'AMD', 'NIO', 'MSFT', 'ENPH', 'BTC', 'SONY'];

let pcnt = new Array(10);

for (let i = 0; i < 10; i++) {
  pcnt[i] = (Math.random() < 0.5 ? -1 : 1) * (Math.floor(Math.random() * 1000) + 1)
}


/*DISPLAYS TOP MOVERS %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/
function topmovers() {
  for (var i = 0; i < 10; i++) {
    document.getElementById("floppy" + (i + 1)).textContent = stock[i];
    if (pcnt[i] < 0) {
      document.getElementById("floppy" + (i + 1)).style.color = "#cc5959";
    } else {
      document.getElementById("floppy" + (i + 1)).style.color = "#1dd623";
    }
  }
}

/*FUNCTION TO SHOW STOCK CLICK%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/
function stockshow(choice) {
  /*fades static on screen away*/
  var fadeTarget = document.getElementById('screen');
  document.getElementById('ticker').textContent = "";

  /*document.getElementById('monitor').style.display = "none";*/
  if (pcnt[choice] < 0) {
    document.getElementById('ticker').style.color = "#cc5959";
    strkcol = "#cc5959";
    document.getElementById('ticker').textContent = stock[choice] + " " + pcnt[choice] + "%";
  } else if (pcnt[choice] > 0) {
    document.getElementById('ticker').style.color = "#1dd623";
    strkcol = "#1dd623";
    document.getElementById('ticker').textContent = stock[choice] + " +" + pcnt[choice] + "%";
  } else {
    pcnt1 = (Math.random() < 0.5 ? -1 : 1) * (Math.floor(Math.random() * 1000) + 1);
    stock1 = document.getElementById('tickertxt').value;

    if (pcnt1 < 0) {
      document.getElementById('ticker').style.color = "#cc5959";
      strkcol = "#cc5959";
      document.getElementById('ticker').textContent = stock1 + " " + pcnt1 + "%";
    } else if (pcnt1 > 0) {
      document.getElementById('ticker').style.color = "#1dd623";
      strkcol = "#1dd623";
      document.getElementById('ticker').textContent = stock1 + " +" + pcnt1 + "%";
    }
  }



var fadeEffect = setInterval(function() {
  if (!fadeTarget.style.opacity) {
    fadeTarget.style.opacity = 1;
  }
  if (fadeTarget.style.opacity > 0) {
    fadeTarget.style.opacity -= 0.1;
  } else {
    clearInterval(fadeEffect);
  }
}, 100);

var cnv = document.getElementById('chartarea');
var ctx = cnv.getContext('2d');


var scale = 50;
var xlimit = (cnv.width) / scale;
var ylimit = (cnv.height) / scale;
var xwidth = cnv.width;
var yheight = cnv.height;

ctx.clearRect(0, 0, xwidth, yheight);

var countx = 0;
var county = 0;

for (var i = 1; i < xwidth - xlimit; i++) {
  j = i * xlimit;
  ctx.beginPath();
  ctx.lineWidth = 0.5;
  ctx.strokeStyle = '#1dd623';
  ctx.moveTo(j, ylimit);
  ctx.lineTo(j, yheight);
  ctx.stroke(); // Draw it
  ctx.closePath();
  countx += 1;
}
for (var i = 1; i < yheight - ylimit; i++) {
  ctx.beginPath();
  ctx.lineWidth = 0.5;
  ctx.strokeStyle = '#1dd623';
  j = i * ylimit;
  ctx.moveTo(xlimit, j);
  ctx.lineTo(xwidth, j);
  ctx.stroke(); // Draw it
  ctx.closePath();

}

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = strkcol;
var step = 20;
var newy = yheight / 2;
var newx = xlimit;
for (var o = 0; o < countx; o = o + step) {
  ctx.moveTo(newx, newy);
  newy = Math.floor(Math.random() * yheight) + 1;
  newx = newx + step;
  ctx.lineTo(newx, newy);
  ctx.stroke();
}
ctx.closePath();

}

/*OVERACRCHING THEME .... INSTEAD OF CSS%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/
function theme() {
  theme1 = "#2a475e"; /*1st palette color*/
  theme2 = "black";
  theme3 = "#1b2838";
  theme4 = "#66c0f4";
  theme5 = "#c7d5e0";

  gradient1 = "linear-gradient(to bottom, " + theme1 + "," + theme2 + ")";
  gradient2 = "linear-gradient(to bottom, " + theme2 + "," + theme1 + ")";
  gradient3 = "linear-gradient(to bottom, " + theme1 + "," + theme4 + ")";

  t = ['header_container'];
  for (var j = 0; j < t.length; j++) {
    var obj = document.getElementsByClassName(t[j])
    for (var i = 0; i < obj.length; i++) {
      obj[i].style.background = gradient1;
    }
  }

  t = ['main_container'];
  for (var j = 0; j < t.length; j++) {
    var obj = document.getElementsByClassName(t[j])
    for (var i = 0; i < obj.length; i++) {
      obj[i].style.background = gradient2;
    }
  }

  t = ['footer'];
  for (var j = 0; j < t.length; j++) {
    var obj = document.getElementsByClassName(t[j])
    for (var i = 0; i < obj.length; i++) {
      obj[i].style.background = gradient3;
    }
  }

  ti = ['bg2', 'bg3'];
  for (var j = 0; j < ti.length; j++) {
    var obj2 = document.getElementById(ti[j])
    obj2.style.background = gradient1;
  }

}

/*used to see live update.... to be deleted later*/
var timedreload = setInterval(function() {
  location.reload();
}, 5000);

function noreload() {
  clearInterval(timedreload)
}

/*ON PAGE RESIZE EVENT %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/
function resizer() {
  var cnv = document.getElementById('headcanvas');
  var ctx = cnv.getContext('2d');
  ctx.clearRect(0, 0, 2000, 110);
}

/*ANIMATED HEADER CANVAS %%%%%%%%%%%%%%%%%%%%S%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/
function drawcanva() {
  var cnv = document.getElementById('headcanvas');
  var ctx = cnv.getContext('2d');
  cnv.width = window.innerWidth;
  cnv.height = 110;
  cnv.style.backgroundColor = "transparent";
  var startx = 0;
  var starty = 50;
  var count1 = 0;
  var i = 1;
  ctx.strokeStyle = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);


  var drawLinesInterval = setInterval(function() {
    if (startx > window.innerWidth) {
      /*clearInterval(drawLinesInterval2);*/
      ctx.strokeStyle = 'white';
      ctx.closePath();
      ctx.closePa
      startx = 0;
      starty = 50;
      i = 1;
      ctx.beginPath();
      ctx.strokeStyle = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
      count1 = count1 + 1;
    } else if (count1 > 8) {
      count1 = 0;
      ctx.clearRect(0, 0, 2000, 110);
    }
    ctx.lineWidth = 6;
    ctx.strokeStyle = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
    ctx.moveTo(startx, starty);
    startx = startx + 20;
    starty = Math.floor(Math.random() * 90) + 1;
    ctx.lineTo(startx, starty);
    ctx.stroke();
    i = i + 1;

  }, 50);
}

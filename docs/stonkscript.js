function init() {
  drawcanva();
  theme();
}

function theme() {
  theme1 = "#2a475e"; /*1st palette color*/
  theme2 = "black";
  theme3 = "#1b2838";
  theme4 = "#66c0f4";
  theme5 = "#c7d5e0";

  gradient1 = "linear-gradient(to bottom, " + theme1 + "," + theme2 + ")";
  gradient2 = "linear-gradient(to bottom, " + theme2 + "," + theme1 + ")";

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

  ti = ['bg2', 'bg3'];
  for (var j = 0; j < ti.length; j++) {
    var obj2 = document.getElementById(ti[j])
    obj2.style.background = gradient1;
  }

}
/*used to see live update
setInterval('timer()', 5000);*/
function timer() {
  location.reload();
}

function resizer() {
  var cnv = document.getElementById('headcanvas');
  var ctx = cnv.getContext('2d');
  ctx.clearRect(0,0, 2000 , 110);
}

function drawcanva() {
  var cnv = document.getElementById('headcanvas');
  var ctx = cnv.getContext('2d');
  cnv.width = 2000;
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
    } else if (count1 > 5) {
      count1 = 0;
      ctx.clearRect(0,0, 2000 , 110);
    }
      ctx.lineWidth = 6;
        ctx.strokeStyle = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
        ctx.moveTo(startx, starty);
        startx = startx + i;
        starty = Math.floor(Math.random() * 90) + 1;
        ctx.lineTo(startx, starty);
        ctx.stroke();
        i = i + 1;

  }, 50);


}

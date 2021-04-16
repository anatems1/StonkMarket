function init() {
  drawcanva();
  theme();
}

function theme() {
  theme1 = "#2a475e"; /*1st palette color*/
  theme2 = "black"

  gradient1 = "linear-gradient(to bottom, "+ theme1 +","+theme2 +")";

  t = ['header_container', 'main_container']
  for (var j = 0; j < t.length; j++) {
    var obj = document.getElementsByClassName(t[j])
    for (var i = 0; i < obj.length; i++) {
      obj[i].style.background = gradient1;
    }
  }

  ti = ['bg1','bg2','bg3']
  for (var j = 0; j < ti.length; j++) {
    var obj2 = document.getElementById(ti[j])
    obj2.style.background = gradient1;

  }

  document.getElementById("bg1").style.background= gradient1;
}
/*used to see live update
setInterval('timer()', 5000);*/
function timer() {
  location.reload();
}

function drawcanva() {
  var cnv = document.getElementById('headcanvas');
  var ctx = cnv.getContext('2d');
  cnv.width = window.innerWidth * .8;
  cnv.height = 110;
  cnv.style.backgroundColor = "transparent";
  var startx = 100;
  var starty = 50;
  var i = 1;
  ctx.strokeStyle = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);

  var drawLinesInterval = setInterval(function() {
    if (startx > window.innerWidth *.8) {
      ctx.strokeStyle = 'white';
      ctx.closePath();
      ctx.closePa
      startx = 100;
      starty = 50;
      i=1;
      ctx.beginPath();
      ctx.strokeStyle = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);

    }

            ctx.lineWidth = 4;
            ctx.moveTo(startx, starty);
            startx = startx + i;
            starty = Math.floor(Math.random() * 90) + 1 ;
            ctx.lineTo(startx, starty);
            ctx.stroke();
            i+=1;
  }, 100);


}

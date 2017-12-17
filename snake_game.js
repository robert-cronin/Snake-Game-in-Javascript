<canvas id = "gc" width = width="400" height="400"></canvas>
<script>
  window.onload=loaded() {
    canv=document.getElementById("gc");
    context = canv.getContext("2d");
    document.addEventListener("keydown", keyPush);
    setInterval(game, 1000/15);
  }
  px=py=10;
  gs=tc=20;
  ax=ay=15;
  xv=yv=0;
  trail=[];
  tail = 5;
  function game() {
    px+=xv;
    py+=yv;
    if(px<0) {
        px= tc-1;
    }
    if(px>tc-1) {
        px= 0;
    }
    if(py<0) {
        py= tc-1;
    }
    if(py>tc-1) {
        py= 0;
    }
    ctx.fillStyle="blue";
    ctx.fillRect(0,0,canv.width,canv.height);
  }
</script>

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
</script>

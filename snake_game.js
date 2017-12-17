<canvas id = "gc" width = width="400" height="400"></canvas>
<script>
  window.onload=loaded() {
    canv=document.getElementById("gc");
    context = canv.getContext("2d");
    document.addEventListener("keydown", keyPush);
    setInterval(game, 1000/15);
  }
</script>

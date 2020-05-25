/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable prefer-const */

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
window.onresize = function() {
  player.resize();
};
window.onload = function() {
  if (window.TIDE) {
    console.log(TIDE.VERSION);
    let canvas1 = document.getElementById("canvas");
    let player =new TIDE.Player();
    console.log(canvas1.clientWidth,canvas1.clientHeight);
    player.init(canvas1);
    player.play();
  }
};



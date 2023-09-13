  // Canvas要素を取得
        var canvas = document.getElementById("myCanvas");
        var context = canvas.getContext("2d");

        // キャンバスのサイズをウィンドウサイズに合わせる
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // ウィンドウのリサイズ時にCanvasのサイズを調整する
        window.addEventListener("resize", function () {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            drawLines();
        });

        // 縦に5本の線を描画
        function drawLines() {
            var lineWidth = canvas.width / 8;

            for (var i = 1; i < 8; i++) {
                var x = lineWidth * i;
                context.beginPath();
                context.moveTo(x, 0);
                context.lineTo(x, canvas.height);
                context.stroke();
            }
        }

        // 初回描画
        drawLines();
var drawHorizontalLineAnim = function() {
  var beginPos = 0,  // スタート位置
      movePos  = beginPos,  // 移動位置（現在位置）
      addVal   = 10,  // 加算量
      endPos   = csWidth - 10,  // 終了位置
      isAnim   = function() {  // アニメーションを終了する条件
        return (movePos < endPos);
      };

  var render = function() {
    ctx.beginPath();
    ctx.moveTo(beginPos, center.y);
    ctx.lineTo(movePos, center.y);
    ctx.closePath();
    ctx.stroke();

    if (isAnim() === true) {
      movePos += addVal;
      // ↑のaddで終了点を超えることがあるため上限を決める
      movePos = (isAnim() === false) ? endPos : movePos;
      requestAnimationFrame(render)
    }
  };
  render();
};
drawHorizontalLineAnim();

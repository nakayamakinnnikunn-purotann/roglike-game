// JavaScriptコードをここに書く
// 例: Canvasを作成してアニメーションを追加

// Canvas要素を取得
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

// キャンバスのサイズを設定
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 上から太い線の初期位置と速度
var lineHeight = 0;
var lineSpeed = 2; // 速度を調整

// 下の極太い線の位置と太さ
var bottomLineY = canvas.height * 0.8;
var bottomLineWidth = canvas.width;

// タップされたかどうかを追跡
var isTapped = false;

// タップイベントリスナーを追加
canvas.addEventListener("click", function () {
    isTapped = true;
});

// 8本の縦線を描画
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

// 上から太い線を描画し、アニメーションする
function drawLineAnimation() {
    if (!isTapped) {
        context.beginPath();
        context.moveTo(0, lineHeight);
        context.lineTo(canvas.width, lineHeight);
        context.lineWidth = 5; // 太い線の太さを設定
        context.strokeStyle = "black"; // 線の色を設定
        context.stroke();

        lineHeight += lineSpeed;

        if (lineHeight > canvas.height) {
            lineHeight = 0;
        }
    }

    // 下の極太い線を描画
    context.beginPath();
    context.moveTo(0, bottomLineY);
    context.lineTo(bottomLineWidth, bottomLineY);
    context.lineWidth = 20; // 極太い線の太さを設定
    context.stroke();

    // 上から太い線と極太い線が重なった場合にタップできるようにする
    if (lineHeight >= bottomLineY - 20 && lineHeight <= bottomLineY + 20 && isTapped) {
        isTapped = false; // タップフラグをリセット
        lineHeight = 0; // 上から太い線をリセット
    }

    requestAnimationFrame(drawLineAnimation);
}

// 初回描画
drawLines();
drawLineAnimation();

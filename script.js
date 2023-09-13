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

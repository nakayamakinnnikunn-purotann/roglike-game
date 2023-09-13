        // Canvas要素を取得
        var canvas = document.getElementById("myCanvas");
        var context = canvas.getContext("2d");

        // キャンバスの幅と高さを取得
        var canvasWidth = canvas.width;
        var canvasHeight = canvas.height;

        // 5本の縦線を引く
        for (var i = 1; i <= 5; i++) {
            var x = (canvasWidth / 5) * i;
            context.beginPath();
            context.moveTo(x, 0);
            context.lineTo(x, canvasHeight);
            context.stroke();
        }

for (i = 0; i < 20; i++) {
    var $Box = newBox();
    $(".bricklayer").append($Box)
}

function newBox() {
    var randomColor = '#' + '0123456789abcdef'.split('').map(function (v, i, a) {
            return i > 5 ? null : a[Math.floor(Math.random() * 16)]
        }).join('');

    var heights = [30, 50, 80, 100, 130, 180];
    var randomHeight = heights[Math.floor(Math.random() * heights.length)];

    var $Box = $("<div />").css({
        backgroundColor: randomColor,
        height: randomHeight
    });

    return $Box;
}
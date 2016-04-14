function newBox() {
  var randomColor = '#' + '0123456789abcdef'.split('').map(function(v, i, a) {
    return i > 5 ? null : a[Math.floor(Math.random() * 16)]
  }).join('');

  var heights = [30, 50, 80, 100, 130, 180];
  var randomHeight = heights[Math.floor(Math.random() * heights.length)];

  var $Box = $("<div class='box' />").css({
    backgroundColor: randomColor,
    height: randomHeight
  });
  return $Box;
}

////////////////////////////////////////////////////////////

//for (i = 0; i < 0; i++) {
  //var $Box = newBox();
  //$(".bricklayer").append($Box.text(i));
//}

// TODO: eklediği item için scroll etsin mi?

var bricklayer = $('.bricklayer').bricklayer()
                  .onBreakpoint(function(e, size) {
                    $(e).find(".box").removeClass("is-prepend").addClass("is-append");
                  })
                  .onAfterPrepend(function(e, el) {
                    $(el).addClass("is-prepend");
                  })
                  .onAfterAppend(function(e, el) {
                    $(el).addClass("is-append");
                  });

////////////////////////////////////////////////////////////

$("button").click(function() {

  var $Box = newBox();
  $Box.text(bricklayer.elements.length + 1);

  if ($(this).is("[data-append]")) {
    bricklayer.append($Box);
    $(document.body).animate({scrollTop: document.body.scrollHeight})
  }

  if ($(this).is("[data-prepend]")) {
    bricklayer.prepend($Box);
    $(document.body).animate({scrollTop: 0})
  }

  if ($(this).is("[data-append-multiple]")) {
    var $AnotherBox = newBox();
    $AnotherBox.text(bricklayer.elements.length + 2);
    bricklayer.append([$Box, $AnotherBox]);
    $(document.body).animate({scrollTop: document.body.scrollHeight})
  }

});

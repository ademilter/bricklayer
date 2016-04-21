function newBox() {
  var randomColor = '#' + Math.random().toString(16).substr(-6);
  var heights = [50, 90, 150, 190, 230];
  var randomHeight = heights[Math.floor(Math.random() * heights.length)];
  var box = document.createElement('div');
  box.className = 'box';
  box.style.backgroundColor = randomColor;
  box.style.height = randomHeight + "px";
  return box;
}

var bricklayer = new Bricklayer(document.querySelector('.bricklayer'))

bricklayer.on("breakpoint", function (e) {
  console.log(e.detail.columnCount);
})

bricklayer.on("afterPrepend", function (e) {
  var el = e.detail.item;
  el.classList.add('is-prepend');
  setTimeout(function () {
    el.classList.remove('is-prepend');
  }, 500);
})

bricklayer.on("afterAppend", function (e) {
  var el = e.detail.item;
  el.classList.add('is-append');
  setTimeout(function () {
    el.classList.remove('is-append');
  }, 500);
});

////////////////////////////////////////////////////////////

var buttons = document.querySelectorAll("button");

function goToScroll(value) {
  document.body.scrollTop = value
}
Array.prototype.slice.call(buttons).forEach(function (button) {
  button.addEventListener('click', function (e) {
    var button = e.target
    var box = newBox();

    box.innerHTML = (bricklayer.elements.length + 1);

    if (button.hasAttribute("data-append")) {
      bricklayer.append(box);
      goToScroll(document.body.scrollHeight)
    }

    if (button.hasAttribute("data-prepend")) {
      bricklayer.prepend(box);
      goToScroll(0)
    }

    if (button.hasAttribute("data-append-multiple")) {
      var anotherBox = newBox();
      anotherBox.innerHTML = (bricklayer.elements.length + 2);
      bricklayer.append([box, anotherBox]);
      goToScroll(document.body.scrollHeight)
    }
  });
});

////

for (var i = 0; i < 10; i++) {
  var box = newBox();
  box.innerHTML = (bricklayer.elements.length + 1);
  bricklayer.append(box);
}

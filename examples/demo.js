function newBox(index) {
  var randomColor = '#' + Math.random().toString(16).substr(-6);
  var heights = [50, 90, 150, 190, 230];
  var randomHeight = heights[Math.floor(Math.random() * heights.length)];
  var box = document.createElement('div');
  box.innerHTML = index;
  box.className = 'box';
  box.style.backgroundColor = randomColor;
  box.style.height = randomHeight + "px";
  box.addEventListener("click", function () {
    bricklayer.remove(box);
  });
  return box;
}

var bricklayer = new Bricklayer(document.querySelector('.bricklayer'))

var i = 1;
bricklayer.append(newBox(i++));
bricklayer.append(newBox(i++));
bricklayer.append(newBox(i++));
bricklayer.append(newBox(i++));
bricklayer.append(newBox(i++));

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
  document.documentElement.scrollTop = value
}
Array.prototype.slice.call(buttons).forEach(function (button) {
  button.addEventListener('click', function (e) {
    var button = e.target

    if (button.hasAttribute("data-append")) {
      let box = newBox(bricklayer.elements.length + 1)
      bricklayer.append(box);
      goToScroll(document.body.scrollHeight)
    }

    if (button.hasAttribute("data-prepend")) {
      let box = newBox(bricklayer.elements.length + 1)
      bricklayer.prepend(box);
      goToScroll(0)
    }

    if (button.hasAttribute("data-append-multiple")) {
      bricklayer.append([
        newBox(bricklayer.elements.length + 1), 
        newBox(bricklayer.elements.length + 2)
      ]);
      goToScroll(document.body.scrollHeight)
    }

    if (button.hasAttribute("data-remove")) {
      if (bricklayer.elements && bricklayer.elements.length > 0) {
        let box = bricklayer.elements[0];
        bricklayer.remove(box);
      }
    }
  });
});

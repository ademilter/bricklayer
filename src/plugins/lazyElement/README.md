# Lazy Element Load

## Installation

```html
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/bricklayer/0.4.1/bricklayer.min.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/bricklayer/0.4.1/bricklayer.min.js"></script>

<!-- You should also add bricklayer.lazyElement.js -->
<script src="//cdnjs.cloudflare.com/ajax/libs/bricklayer/0.4.1/plugins/lazyElement/bricklayer.lazyElement.min.js"></script>
```

## Usage

Lazy Element Load is used to add elements lazily.

```js
// Element will append 1s later.
bricklayer.appendLazyElement(function (done) {
  setTimeout(function () {
    done(element)
  }, 1000)
})
```

```js
// Image will wait source to be loaded to append.
bricklayer.appendLazyElement(function (done) {
  var image = new Image()
  image.src = "demo.jpg"
  image.onload = function () {
    done(image)
  }
})
```


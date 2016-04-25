# jQuery Plugin

## Installation

```html
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/bricklayer/0.4.1/bricklayer.min.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/bricklayer/0.4.1/bricklayer.min.js"></script>

<!-- You should also add bricklayer.jquery.js -->
<script src="//cdnjs.cloudflare.com/ajax/libs/bricklayer/0.4.1/plugins/jquery/bricklayer.jquery.min.js"></script>
```

## Usage

You can enable plugin for your bricklayer elements.

```js
// Initialize
$(".bricklayer").bricklayer()

// Append Elements
$(".bricklayer").appendElements(elements)

// Prepend Elements
$(".bricklayer").prependElements(elements)

// Listen Events (bricklayer.breakpoint, bricklayer.afterAppend, bricklayer.afterPrepend, bricklayer.beforeAppend, bricklayer.beforePrepend)
$(".bricklayer").on("bricklayer.breakpoint", handlerFunction)
```

For more information you can [play on playground](http://codepen.io/f/pen/zqLJNa).


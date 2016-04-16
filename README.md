# Bricklayer

[![npm version](https://badge.fury.io/js/bricklayer.svg)](https://badge.fury.io/js/bricklayer)
[![Bower version](https://badge.fury.io/bo/bricklayer.svg)](https://badge.fury.io/bo/bricklayer)


[![Join the chat at https://gitter.im/ademilter/bricklayer](https://badges.gitter.im/ademilter/bricklayer.svg)](https://gitter.im/ademilter/bricklayer?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Lightweight & independent cascading grid layout library. Inspired by and a lighter alternative to [Masonry](http://masonry.desandro.com/).

[**Play with example** :point_right:](http://ademilter.github.io/bricklayer)

[![Image](https://rawgit.com/ademilter/bricklayer/master/screenshot.gif)](http://ademilter.github.io/bricklayer)

## Why Bricklayer?

 - :gem: **Simpler** than any other cascading grid layout tools.
 - :snowflake: **Lightweight**, no fat. **(1.5KB gzipped)**
 - :construction_worker: **No frameworks required**.
 - :droplet: **Responsive** support with no glitches.
 - :zap: **Easy** configuration.
 - :skull: **No inline styles**, static positioning.

## Installation

```html
<link rel="stylesheet" href="//rawgit.com/ademilter/bricklayer/master/dist/bricklayer.css">
<script src="//rawgit.com/ademilter/bricklayer/master/dist/bricklayer.min.js"></script>
```

If you are using modular JavaScript, you can use **NPM** or **Bower**
```
npm install bricklayer # using npm
bower install bricklayer # or using bower
```

## Usage

- Create a simple list:

```html
<div class="bricklayer">
  <div>Your item</div>
  <div>Your another item</div>
  <div>Your another but long item</div>
  <div>Your another but very short item</div>
  <div>Your one more item</div>
  <div>Your smallest item</div>
</div>
```

- Define **bricklayer column size**:

```css
@media screen and (min-width: 1200px) {
  .bricklayer-column-sizer {
    /* divide by 3. */
    width: 33.3%;
  }
}

@media screen and (min-width: 768px) {
  .bricklayer-column-sizer {
    /* divide by 2. */
    width: 50%;
  }
}
```

- Make them bricks using `Bricklayer` class:

```js
var bricklayer = new Bricklayer(document.querySelector('.bricklayer'))
```

## Methods
- Add bricks dynamically:

```js
bricklayer.append(
  myAwesomeElement
)
```

You can also add multiple bricks at once:

```js
bricklayer.prepend([
  myAwesomeElement,
  myAwesomeButVeryLongElement
])
```

## Events

You can add listeners to Bricklayer for full control. These allow you to
create more extensible layouts. You can use these events especially for
animations. Please see examples.

```js
bricklayer.on('beforeAppend', function (e) {
  var itemElement = e.detail.item
  var columnElement = e.detail.column
  // `itemElement` will be appended to the end of `columnElement`
})

bricklayer.on('beforePrepend', function (e) {
  var itemElement = e.detail.item
  var columnElement = e.detail.column
  // `itemElement` will be prepended to the top of `columnElement`
})

bricklayer.on('afterAppend', function (e) {
  var itemElement = e.detail.item
  var columnElement = e.detail.column
  // `itemElement` is appended to the end of `columnElement`
})

bricklayer.on('afterPrepend', function (e) {
  var itemElement = e.detail.item
  var columnElement = e.detail.column
  // `itemElement` is prepended to the top of `columnElement`
})

bricklayer.on('breakpoint', function (e) {
  var columnCount = e.detail.columnCount
  // In every breakpoint, this event will be fired with the count of columns
})
```

## Using with jQuery

You can make simple jQuery plugin based on Bricklayer.

Add this fragment into your codebase to have bricklayer plugin.

```js
$.fn.bricklayer = function (options) {
 $(this).each(function () {
   $(this).data('bricklayer', new Bricklayer(this, options))
 })
}
```

```js
var bricklayer = $(".bricklayer").bricklayer()

bricklayer.eq(0).data('bricklayer').append([
  // items
])
```

## Browser Support

This plugin works seamlessly with these browsers:
  - Safari 9.0.2
  - Firefox 43.0.4
  - Chrome 49

Please add more and open a pull request if you tested successfully on other browsers.

## License

Bricklayer - Cascading Grid Layouts

Copyright © 2016 Adem İlter

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE
OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


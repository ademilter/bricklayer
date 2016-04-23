<img src="https://raw.githubusercontent.com/ademilter/bricklayer/master/logo.png" width="416">
---


[![Join the chat at https://gitter.im/ademilter/bricklayer](https://badges.gitter.im/ademilter/bricklayer.svg)](https://gitter.im/ademilter/bricklayer?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![npm version](https://badge.fury.io/js/bricklayer.svg)](https://badge.fury.io/js/bricklayer)
[![Bower version](https://badge.fury.io/bo/bricklayer.svg)](https://badge.fury.io/bo/bricklayer)


Lightweight & independent cascading grid layout library. Inspired by and a lighter alternative to [Masonry](http://masonry.desandro.com/).

[**Play with example** :point_right:](http://ademilter.github.io/bricklayer)

[![Image](https://rawgit.com/ademilter/bricklayer/master/assets/screenshot.gif)](http://ademilter.github.io/bricklayer)

## All Examples

 - [Colourful Boxes](http://bricklayer.js.org/index.html)
 - [Gradient Wall](http://bricklayer.js.org/gradient-wall.html)

## Bricklayer Playgrounds

- Play with Bricklayer on [CodePen.io](http://codepen.io/f/pen/QNBwrO)
- Play with Bricklayer on [JSFiddle](https://jsfiddle.net/fka/totn2yL0/)

## Why Bricklayer?

 - :gem: **Simpler** than any other cascading grid layout tools.
 - :snowflake: **Lightweight**, no fat. **(1.5KB gzipped)**
 - :construction_worker: **No frameworks required**.
 - :droplet: **Responsive** support with no glitches.
 - :zap: **Easy** configuration.
 - :skull: **No inline styles**, static positioning.

## Installation

```html
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/bricklayer/0.2.4/bricklayer.min.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/bricklayer/0.2.4/bricklayer.min.js"></script>
```

If you are using modular JavaScript, you can use **NPM** or **Bower**
```
npm install bricklayer # using npm
```

```
bower install bricklayer # or using bower
```

## Bricklayer Extensions

Since Bricklayer is purely vanilla, you can use it with your frameworks. Here some framework extensions built by the awesome community:

| Framework | Bricklayer Extension |
| --------- | -------------------- |
| **Angular.js** | [JohnnyTheTank/angular-bricklayer](https://github.com/JohnnyTheTank/angular-bricklayer) |

You can also [add your extensions](https://github.com/ademilter/bricklayer/issues/new?title=Bricklayer%20Extension) to the list!

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

## Are you using Bricklayer.js for your next project?

[Let us know](https://github.com/ademilter/bricklayer/issues/new?title=We%20use%20bricklayer,%20too!&body=Please%20add%20this%20to%20the%20list!%0A%0AWebsite:%20%3Curl%3E%0ATitle:%20%3Ca%20short%20title%3E%0A%0A%3Cany%20description%3E) if you use this awesome library in your project and we'll add here!

## Browser Support

This plugin works seamlessly with these browsers:
  - Safari 9.0.2
  - Firefox 43.0.4
  - Chrome 49

Please add more and open a pull request if you tested successfully on other browsers.

## Contribution

Check out our awesome [contributors](https://github.com/ademilter/bricklayer/graphs/contributors)! Maybe you want to buy some coffee for them ☕️

We need contributions for:
 - Improving documentation
 - Building fancy web pages
 - Typo fixes

## Credits

 - [Adem İlter](https://twitter.com/ademilter) - creator, owner of the whole idea, maintainer of artwork.
 - [Fatih Kadir Akın](https://twitter.com/fkadev) - creator, maintainer of JavaScript parts.
 - [Yasir Buğra Eryılmaz](https://twitter.com/yasirbugra) - retouch of logo

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


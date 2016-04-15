# Bricklayer

Lightweight cascading grid layout library. Inspired and a lighter alternative to [Masonry](http://masonry.desandro.com/)

[Play with example](http://ademilter.github.io/bricklayer)

![Image](https://rawgit.com/ademilter/bricklayer/master/screenshot.gif)

## Why Bricklayer?

 - **Simpler** than any other cascading grid layout tools.
 - **Lightweight**, no fat. **(1.1KB gzipped)**
 - Integrates with **jQuery** seamlessly.
 - **Responsive** support with no glitch.
 - Easy configuration.

## Installation

```html
<link rel="stylesheet" href="bricklayer.css">
<script src="bricklayer.js"></script>
```

If you are using modular JavaScript, you can use **NPM** or **Bower**
```
npm install bricklayer # using npm
bower install bricklayer # or using bower
```

## Usage

- Create a simple list.

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

- Make them bricks using `bricklayer` plugin.

```js
var bricklayer = $(".bricklayer").bricklayer()
```

## Methods
- Add bricks dynamically

```js
bricklayer.append(
  $("<div>My awesome content</div>")
)
```

You can also add multiple bricks at once:

```js
bricklayer.prepend([
  $("<div>My awesome content</div>"),
  $("<div>My another awesome but very long content</div>")
])
```

### Accessing Bricklayer Instance via `data` Attribute

```js
$(".bricklayer").bricklayer().data('bricklayer').append([
  // items
])
```

## Events

You can add listeners to Bricklayer to have full control. They allows you to
create more extensible layouts. You can use these events especially for
animations. Please see examples.

```js
bricklayer.onBeforeAppend(function (e, itemElement, columnElement) {
  // `itemElement` will be appended to the end of `columnElement`
})

bricklayer.onBeforePrepend(function (e, itemElement, columnElement) {
  // `itemElement` will be prepended to the top of `columnElement`
})

bricklayer.onAfterAppend(function (e, itemElement, columnElement) {
  // `itemElement` is appended to the end of `columnElement`
})

bricklayer.onAfterPrepend(function (e, itemElement, columnElement) {
  // `itemElement` is prepended to the top of `columnElement`
})
```

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


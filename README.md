# Bricklayer

Lightweight cascading grid layout library. Inspired and a lighter alternative to [Masonry](http://masonry.desandro.com/)

## Why Bricklayer?

 - **Simpler** than any other cascading grid layout tools.
 - **Lightweight**, no fat. **(1.1KB gzipped)
 - Integrates with **jQuery** seamlessly.
 - **Responsive** support with no glitch.

## Installation

```
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

- Add bricks dynamically

```js
bricklayer.append(
  $("<div>My awesome content</div>")
)
```

You can also add multiple bricks at once:

```js
bricklayer.append([
  $("<div>My awesome content</div>"),
  $("<div>My another awesome but very long content</div>")
])
```

## Callbacks

You can add listeners.

```js
bricklayer.on("bricklayer.afterAppend", function () {})
bricklayer.on("bricklayer.beforeAppend", function () {})
```

## License

MIT

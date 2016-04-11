# Bricklayer

**
```
⚠️  This plugin is hardly in development right now, please do not use until it's released.
```
**

Lightweight cascading grid layout library. Inspired and a lighter alternative to [Masonry](http://masonry.desandro.com/)

## Why Bricklayer?

 - **Simpler** than any other cascading grid layout tools.
 - **Lightweight**, no fat.
 - Integrates with **jQuery** seamlessly.
 - **Responsive** support.

## Installation
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
  .bricklayer-column-size {
    /* divide by 3. */
    width: 33.3%;
  }
}

@media screen and (min-width: 768px) {
  .bricklayer-column-size {
    /* divide by 2. */
    width: 50%;
  }
}
```

- Make them bricks using `bricklayer` plugin.

```js
$(".bricklayer").bricklayer()
```

- Add bricks dynamically

```js
$(".bricklayer").bricklayer("appendElements", [
  $("<div>My awesome content</div>"),
  $("<div>My another awesome but very long content</div>")
])
```

## Effects

```js
var $bricklayer = $(".container").bricklayer({
  // The effect options when a new brick appended.
  effect: {
    type: "fadein",
    duration: "0.3s"
  },
})
```

## Append and Prepend Elements

```js
$bricklayer.appendElements(container, [item])

// Alternatively you can trigger as jQuery plugin.
$(".bricklayer").bricklayer("appendElements", [item])
```

```js
$bricklayer.prependElements(container, [item])

// Alternatively you can trigger as jQuery plugin.
$(".bricklayer").bricklayer("prependElements", [item])
```

## Callbacks

```js
$(".bricklayer").bricklayer({
  // Callback hooks to make your bricklayer more extensive.
  beforeAppend: function (itemToAdd) { },
  afterAppend: function (addedItem) { }
})
```

You can alternatively add listeners lazily.

```js
$bricklayer.on("bricklayer.beforeAppend", function () {})
$bricklayer.on("bricklayer.afterAppend", function () {})
```

## Documentation

> To be defined

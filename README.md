# Bricklayer

Lightweight cascading grid layout library. Inspired and a lighter alternative to [Masonry](http://masonry.desandro.com/)

## Why Bricklayer?

 - **Simpler** than any other cascading grid layout tools.
 - **Lightweight**, no fat.
 - Integrates with **jQuery** seamlessly.
 - **Responsive** support.

## Installation

Using NPM:
```
npm install bricklayer
```

Using Bower:
```
bower install bricklayer
```

## Usage

```js
var $bricklayer = $(".container").bricklayer({
  // Elements to be layed as bricks.
  itemSelector: ".article",

  // The effect options when a new brick appended.
  effect: {
    type: "fadein",
    duration: "0.3s"
  },

  // Callback hooks to make your bricklayer more extensive.
  beforeAppend: function () {  },
  afterAppend: function () {  },
})
```

## Documentation

> To be defined

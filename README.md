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

  // The effect options when a new brick appended.
  effect: {
    type: "fadein",
    duration: "0.3s"
  },

  // Add new elements
  appendElements: function(container, [item]) { },
  prependElements: function(container, [item]) { },

  // Callback hooks to make your bricklayer more extensive.
  beforeAppend: function (container, [item]) { },
  afterAppend: function (container, [item]) { }

})
```

## Documentation

> To be defined

(function (root, factory) {
  if (typeof exports === 'object') {
    // CommonJS
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(function () {
      return (root.bricklayer = factory());
    });
  } else {
    // Global Variables
    root.bricklayer = factory();
  }
}(this, function () {

  function Bricklayer() {
    // Main implementation
  }

  return new Bricklayer
}));

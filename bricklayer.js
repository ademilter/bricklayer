(function (root, factory) {
  if (typeof exports === 'object') {
    // CommonJS
    module.exports = factory(require('jquery'))
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(['jquery'], function (jQuery) {
      return (root.bricklayer = factory(jQuery))
    });
  } else {
    // Global Variables
    root.bricklayer = factory(root.jQuery)
  }
}(this, function (jQuery) {
  return (function($) {

    function Bricklayer(element, options) {
    }

    /*
    function findMinHeightColumn(context, selector) {
      return $($(selector, context)
        .sort(function(firstEl, secondEl) {
          return $(firstEl).height() > $(secondEl).height()
        })[0])
    }

    function appendElement(element) {
      var column = findMinHeightColumn(this, ".bricklayer-column")
      $(element).attr('data-bricklayer-index', index++).appendTo(column)
    }
    */

    $.fn.bricklayer = function (arg0, arg1) {
      $(this).each(function () {
        var $el = $(this)
        if (typeof arg0 === 'object') {
          $el.data("bricklayer", new Bricklayer(this, options))
        } else if (typeof arg0 === 'string') {
          var instance = $el.data("bricklayer")
          instance[arg0].apply(instance, Array.prototype.slice.call(arguments, 1))
        }
      })
    }

    return Bricklayer
  })(jQuery)
}));

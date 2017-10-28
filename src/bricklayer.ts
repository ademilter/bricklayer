interface IOptions {
  rulerClassName  : string
  columnClassName : string
}

module Bricklayer {

  // Helper Functions
  function toArray(arrayLike : {length : number}) {
    return [].slice.call(arrayLike)
  }

  function triggerEvent(el, eventName : string, data) {
    if (window["CustomEvent"] && typeof window["CustomEvent"] === 'function') {
      var event = new CustomEvent(eventName, {detail: data});
    } else {
      var event = document.createEvent('CustomEvent');
      event.initCustomEvent(eventName, true, true, data);
    }
    return el.dispatchEvent(event)
  }

  const DEFAULTS : IOptions = {
    rulerClassName: "bricklayer-column-sizer",
    columnClassName: "bricklayer-column"
  }

  abstract class SimpleElement {
    element : HTMLElement
    constructor(className : string) {
      this.element = document.createElement("div")
      this.element.className = className
    }

    destroy() {
      this.element.parentNode.removeChild(this.element)
    }
  }

  class Ruler extends SimpleElement {
    getWidth() {
      this.element.setAttribute('style', `
        display: block;
        visibility: hidden !important;
        top: -1000px !important;
      `)
      var width = this.element.offsetWidth
      this.element.removeAttribute('style')
      return width
    }
  }
  class Column extends SimpleElement {}

  export class Container {
    ruler       : Ruler

    elements    : any
    columnCount : number

    constructor(public element: HTMLElement, protected options : IOptions = DEFAULTS) {
      this.build()
      this.buildResponsive()
    }

    append(item) {
      if (Array.isArray(item)) {
        item.forEach(item => this.append(item))
        return
      }
      var column = this.findMinHeightColumn()
      this.elements = toArray(this.elements).concat([item])
      this.applyPosition('append', column, item)
    }

    prepend(item) {
      if (Array.isArray(item)) {
        item.forEach(item => this.prepend(item))
        return
      }
      var column = this.findMinHeightColumn()
      this.elements = [item].concat(toArray(this.elements))
      this.applyPosition('prepend', column, item)
    }

    on(eventName, handler) {
      // eventName may be:
      // - breakpoint
      // - afterAppend
      // - beforeAppend
      // - afterPrepend
      // - beforePrepend
      this.element.addEventListener(`bricklayer.${eventName}`, handler)
      return this
    }

    off(eventName, handler) {
      this.element.removeEventListener(`bricklayer.${eventName}`, handler)
      return this
    }

    redraw() {
      var {columnCount} = this
      this.checkColumnCount(false)
      this.reorderElements(columnCount)
      triggerEvent(this.element, "bricklayer.redraw", {columnCount})
    }

    destroy() {
      this.ruler.destroy()
      toArray(this.elements).forEach(el => this.element.appendChild(el))
      toArray(this.getColumns()).forEach(el => el.parentNode.removeChild(el))
      triggerEvent(this.element, "bricklayer.destroy", {})
    }

    private build() {
      this.ruler = new Ruler(this.options.rulerClassName)
      this.elements = this.getElementsInOrder()
      this.element.insertBefore(this.ruler.element, this.element.firstChild)
    }

    private buildResponsive() {
      window.addEventListener("resize", e => this.checkColumnCount())
      this.checkColumnCount()
      this.on("breakpoint", e => this.reorderElements(e.detail.columnCount))
      if (this.columnCount >= 1) {
        this.reorderElements(this.columnCount)
      }
    }

    private getColumns() {
      return this.element.querySelectorAll(`:scope > .${this.options.columnClassName}`)
    }

    private findMinHeightColumn() {
      var allColumns = toArray(this.getColumns())
      let heights = allColumns.map(childrenHeight)
      let minHeight = Math.min.apply(null, heights)
      return allColumns[heights.indexOf(minHeight)]

      function childrenHeight(container) {
        return toArray(container.children).map(outerHeight).reduce((sum, h) => sum + h, 0)
      }

      function outerHeight(element) {
        return parseFloat(getComputedStyle(element).getPropertyValue('height'))
      }
    }

    private getElementsInOrder() {
      return this.element.querySelectorAll(`:scope > *:not(.${this.options.columnClassName}):not(.${this.options.rulerClassName})`)
    }

    private checkColumnCount(publish = true) {
      var columnCount = this.getColumnCount()
      if (this.columnCount !== columnCount) {
        if (publish) {
          triggerEvent(this.element, "bricklayer.breakpoint", {columnCount})
        }
        this.columnCount = columnCount
      }
    }

    private reorderElements(columnCount : number = 1) {
      var elements = toArray(this.elements).map(item => {
        let element = item.parentNode ? item.parentNode.removeChild(item) : item
        return element
      })

      var columns = this.getColumns()
      for (var i = 0; i < columns.length; i++) {
        columns[i].parentNode.removeChild(columns[i])
      }

      for (var i = 0; i < columnCount; i++) {
        let {element} = new Column(this.options.columnClassName)
        this.element.appendChild(element)
      }

      elements.forEach(item => {
        var column = this.findMinHeightColumn()
        column.appendChild(item)
      })
    }

    private getColumnCount() {
      var containerWidth = this.element.offsetWidth
      var columnWidth = this.ruler.getWidth()

      if (columnWidth == 0) {
        return 1
      }

      return Math.round(containerWidth / columnWidth)
    }

    private applyPosition(pos, column, item) {
      let trigger = (timing) => {
        let eventName = timing + pos.charAt(0).toUpperCase() + pos.substr(1)
        triggerEvent(this.element, `bricklayer.${eventName}`, {item, column})
      }
      trigger('before')
      switch (pos) {
        case 'append':
          column.appendChild(item)
          break
        case 'prepend':
          column.insertBefore(item, column.firstChild)
          break
      }
      trigger('after')
    }

  }
}

declare var define
declare var module

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(() => factory())
  } else if (typeof window !== "undefined" && root === window) {
    root.Bricklayer = factory()
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory()
  }
}(typeof window !== "undefined"? window : this, function () {
  return Bricklayer.Container
}))


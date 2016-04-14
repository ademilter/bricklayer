/// <reference path="typings/jquery.d.ts" />

interface IOptions {
  rulerClassName  : string
  columnClassName : string
}

module Bricklayer {

  const DEFAULTS : IOptions = {
    rulerClassName: "bricklayer-column-sizer",
    columnClassName: "bricklayer-column"
  }

  abstract class SimpleElement {
    element : Element
    constructor(className : string) {
      this.element = document.createElement("div")
      this.element.className = className
    }
  }

  class Ruler extends SimpleElement {}
  class Column extends SimpleElement {}

  export class Container {
    element     : JQuery
    ruler       : Ruler

    elements    : any
    columnCount : number

    constructor(selector : string, protected options : IOptions = DEFAULTS) {
      this.element = jQuery(selector)
      this.ruler = new Ruler(options.rulerClassName)

      this.build()
      this.buildResponsive()
    }

    append(item) {
      if (jQuery.isArray(item)) {
        item.forEach(item => this.append(item))
        return
      }
      var column = this.findMinHeightColumn()
      this.elements = jQuery(this.elements.get().concat([item]))
      this.applyPosition('append', column, item)
    }

    prepend(item) {
      if (jQuery.isArray(item)) {
        item.forEach(item => this.prepend(item))
        return
      }
      var column = this.findMinHeightColumn()
      this.elements = jQuery([item].concat(this.elements.get()))
      this.applyPosition('prepend', column, item)
    }

    onBreakpoint(handler : (eventObject: JQueryEventObject, size : number) => any) {
      this.element.on('bricklayer.breakpoint', handler)
      return this
    }

    onAfterAppend(handler : (eventObject: JQueryEventObject) => any) {
      this.element.on('bricklayer.afterAppend', handler)
      return this
    }

    onBeforeAppend(handler : (eventObject: JQueryEventObject) => any) {
      this.element.on('bricklayer.beforeAppend', handler)
      return this
    }

    onAfterPrepend(handler : (eventObject: JQueryEventObject) => any) {
      this.element.on('bricklayer.afterPrepend', handler)
      return this
    }

    onBeforePrepend(handler : (eventObject: JQueryEventObject) => any) {
      this.element.on('bricklayer.beforePrepend', handler)
      return this
    }

    private build() {
      this.elements = this.getElementsInOrder()
      this.element.prepend(this.ruler.element)
    }

    private buildResponsive() {
      jQuery(window).on("resize", e => this.checkColumnCount()).trigger("resize")
      this.onBreakpoint((e, size) => this.reorderElements(size))
      if (this.columnCount >= 1) {
        this.reorderElements(this.columnCount)
      }
    }

    private getColumns() {
      return this.element.find(`> .${this.options.columnClassName}`)
    }


    private findMinHeightColumn() {
      var allColumns = this.getColumns()
      let column = allColumns.get().sort((a, b) => {
        let aHeight = jQuery(a).height()
        let bHeight = jQuery(b).height()
        return aHeight > bHeight ? 1 : (aHeight == bHeight ? 0 : -1)
      })
      return jQuery(column).eq(0)
    }

    private getElementsInOrder() {
      return this.element.find("> *")
        .not(`> .${this.options.columnClassName}`)
        .not(`> .${this.options.rulerClassName}`)
    }

    private checkColumnCount() {
      var columnCount = this.getColumnCount()
      if (this.columnCount !== columnCount) {
        this.element.trigger('bricklayer.breakpoint', columnCount)
        this.columnCount = columnCount
      }
    }

    private reorderElements(columnCount : number) {
      var elements = this.elements.detach()

      this.getColumns().remove()

      for (var i = 0; i < columnCount; i++) {
        let {element} = new Column(this.options.columnClassName)
        this.element.append(element)
      }

      elements.each((i, item) => {
        var column = this.findMinHeightColumn()
        column.append(item)
      })
    }

    private getColumnCount() {
      var containerWidth = this.element.width()
      var columnWidth = jQuery(this.ruler.element).width()
      return Math.round(containerWidth / columnWidth)
    }

    private applyPosition(pos, column, item) {
      let trigger = (timing) => {
        let eventName = timing + pos.charAt(0).toUpperCase() + pos.substr(1)
        this.element.trigger(`bricklayer.${eventName}`, [item, column])
      }
      trigger('before')
      column[pos](item)
      trigger('after')
    }
  }
}

jQuery.fn.bricklayer = function (options) {
  return new Bricklayer.Container(this, options)
}

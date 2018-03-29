import {ElementRef, Injectable, Renderer2, RendererFactory2} from '@angular/core';
import {unescapeHtml} from "@angular/platform-browser/src/browser/transfer_state";

@Injectable()
export class DaakService {
  private renderer: Renderer2;
  private _yScrolled:boolean = false;

  constructor(rendererFactory: RendererFactory2) {
    // window['daakEvent'] = {};
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  get yScrolled(): boolean {
    return this._yScrolled;
  }

  set yScrolled(value: boolean) {
    this._yScrolled = value;
  }

  removeListen(elem, event) {
    elem = this.realElem(elem);
    var func = elem[event];

    if (elem.removeEventListener) { // For all major browsers, except IE 8 and earlier
      elem.removeEventListener(event, func);
    } else if (elem.detachEvent) { // For IE 8 and earlier versions
        elem.detachEvent(event, func);
    }
  }

  listen(elem, event, func) {
    elem = this.realElem(elem);
    elem[event] = func;
    if (elem.addEventListener) {   // For all major browsers, except IE 8 and earlier
      elem.addEventListener(event, func);
    } else if (elem.attachEvent) { // For IE 8 and earlier versions
      elem.attachEvent('on' + event, func);
    }
  }

  one(elem, events, func) {
    elem = this.realElem(elem);

    var arrEvents = events.split(' ');
    for (let i in arrEvents) {
      var event = arrEvents[i];
        this.removeListen(elem, event);
        this.listen(elem, event, func);
    }
  }

  // private removeClass (elem, x, func) {
  //   elem.classList.remove('animated');
  //   elem.classList.remove(x);
  //
  //   if ( func ) { //alert('run func')
  //     func(elem);
  //   }
  // }

  cssAnimate(elem, css, func?, delay?) {
    elem = this.realElem(elem);
    var that = this;

    if ((elem.animating === false) || (elem.animating === undefined)) {
      elem.animating = true;

      // var oldAttr = elem.getAttribute('class');
      // elem.setAttribute('class', oldAttr + ' ' + css + ' daak-animated');
      if (delay){
        this.renderer.setStyle(elem, 'animation-duration', delay + 's');
        this.renderer.setStyle(elem, 'animation-fill-mode', 'both');
      }
      else {
        this.renderer.addClass(elem, 'animated');
      }

      this.renderer.addClass(elem, css);

      this.one(elem, 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (e) {
        var elem = e.target;
        that.renderer.removeClass(elem, 'animated');
        that.renderer.removeClass(elem, css);
        that.renderer.removeClass(elem, 'animation-duration');
        that.renderer.removeClass(elem, 'animation-fill-mode');
        // elem.classList.remove('animated');
        // elem.classList.remove(css);

        if (func) { //alert('run func')
          func(elem);
        }
        // console.log(elem.animating)
        elem.animating = false;
      });
    }
    // this.listen(elem, 'webkitAnimationEnd', rmCls);
    // this.listen(elem, 'mozAnimationEnd', rmCls);
    // this.listen(elem, 'MSAnimationEnd', rmCls);
    // this.listen(elem, 'oanimationend', rmCls);
    // this.listen(elem, 'animationend', rmCls);

    // this.renderer.listen(elem, 'webkitAnimationEnd',
    //   (event) => {
    //     this.removeClass(elem, css, func);
    // });

    // this.renderer.listen(elem, 'mozAnimationEnd',
    //   (event) => {
    //     this.removeClass(elem, css, func);
    // });

    // this.renderer.listen(elem, 'MSAnimationEnd',
    //   (event) => {
    //     this.removeClass(elem, css, func);
    // });

    // this.renderer.listen(elem, 'oanimationend',
    //   (event) => {
    //     this.removeClass(elem, css, func);
    // });

    // this.renderer.listen(elem, 'animationend',
    //   (event) => {
    //     this.removeClass(elem, css, func);
    //   });
  }

  private realElem(elem) {
    return elem instanceof ElementRef ? elem.nativeElement : elem;
  }

  show(elem, css?, func?, delay?) {
    elem = this.realElem(elem);
    elem.showed = true;
    var that = this;
    // elem.style.display = 'block';
    this.renderer.setStyle(elem, 'display', 'block');

    if (css){
      that.cssAnimate(elem, css, function () {
        if( func ) {
          func(elem);
        }
      },
      delay);
    }
  }

  hide(elem, css?, func?, delay?) {
    elem = this.realElem(elem);
    elem.showed = false;
    var that = this;

    if (css){
      this.cssAnimate(elem, css, function (target) {
        // target.style.display = 'none';
        that.renderer.setStyle(target, 'display', 'none');

        if ( func ) {
          func(elem);
        }
      },
      delay);

      return;
    }

    elem.style.display = 'none';
  }

  toggle(elem, showCss?, hideCss?, showFunc?, hideFunc?,delay?) {
    if(!this.yScrolled) {
      elem = this.realElem(elem);
      if ((elem.animating === false) || (elem.animating === undefined)) {
        if (elem.showed) {
          this.hide(elem, hideCss, hideFunc, delay);
        }
        else {
          this.show(elem, showCss, showFunc, delay)
        }
      }
    }
  }

  changedTouches(event, index) {
    if (event.changedTouches){
      return event.changedTouches[index];
    }
  }

  yScrolling(elem, func?){
    elem = this.realElem(elem);
    // elem.realElem = elem;

    var y = 0;
    var down = false;
    var scrollTop = 0;
    var scrlTopWheel =0;
    var that = this;

    var sensed = false;

    var sensDown = (sclTop, maxScrollTop) => {
      if ( sclTop >= maxScrollTop){
        if (func){
          func(that);
        }
      }
    }

    this.one(elem, 'mousewheel DOMMouseScroll', (event) => {
      // var elem = event.target;

      var maxScrollTop = elem.scrollHeight - elem.clientHeight;
      var scrollTop = elem.scrollTop;
      var wheelDelta = 'wheelDelta' in event ? event.wheelDelta : -40 * event.detail;

      if (wheelDelta > 0) {
        if(scrollTop > 0){
          scrlTopWheel -= scrlTopWheel <= 0 ? 0 : 50;
          elem.scrollTop = scrlTopWheel;
        }
      }
      else {
        if(scrollTop < maxScrollTop){
          scrlTopWheel += scrlTopWheel >= maxScrollTop ? 0 : 50;
          elem.scrollTop = scrlTopWheel;

          sensed = false;
        }
        else if(sensed == false){
          sensed = true;
          sensDown(scrollTop, maxScrollTop);
        }
      }
    });

    this.one(elem,"mousedown touchstart", (e) =>{
      var touchobj = that.changedTouches(e, 0);

      down = true;
      y = e.pageY || touchobj.clientY;
      scrollTop = elem.scrollTop;
    });

    this.one(elem, "mouseup touchend", function(e){
      down = false;
      var touchobj = that.changedTouches(e, 0);

      var maxScrollTop = this.scrollHeight - this.clientHeight;
      sensDown(elem.scrollTop, maxScrollTop);

      that.yScrolled = touchobj != undefined ? false : that.yScrolled;
    });

    this.one(elem, "mousemove touchmove", function(e){
      var touchobj =  that.changedTouches(e, 0);

      if(down){
        that.yScrolled = true;
        var min = scrollTop + (y - (e.pageY || touchobj.clientY));
        elem.scrollTop = min;

        scrlTopWheel = elem.scrollTop;
      }
      else{
        that.yScrolled = false;
      }
    });
  };

}

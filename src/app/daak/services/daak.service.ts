import {ElementRef, Injectable, Renderer2, RendererFactory2} from '@angular/core';

@Injectable()
export class DaakService {
  private renderer: Renderer2;
  constructor(rendererFactory: RendererFactory2) {
    // window['daakEvent'] = {};
    this.renderer = rendererFactory.createRenderer(null, null);
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

  toggle(elem, showCss?, hideCss?, showFunc?, hideFunc?,delay?) {debugger;
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

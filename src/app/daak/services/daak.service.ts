import {ElementRef, Injectable/*, Renderer2, RendererFactory2*/} from '@angular/core';
import {el} from "@angular/platform-browser/testing/src/browser_util";

@Injectable()
export class DaakService {

  // private renderer: Renderer2;
  private cssAnimateFunction: string[];
  constructor(/*rendererFactory: RendererFactory2*/) {
    // window['daakEvent'] = {};
    // this.renderer = rendererFactory.createRenderer(null, null);
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

  cssAnimate(elem, x, func?) {
    elem = this.realElem(elem);
    var oldAttr = elem.getAttribute('class');
    elem.setAttribute('class', oldAttr + ' ' + x + ' animated');

    // this.removelisten(elem, )

    this.one(elem, 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
      elem.classList.remove('animated');
      elem.classList.remove(x);

      if ( func ) { //alert('run func')
        func(elem);
      }
    });
    // this.listen(elem, 'webkitAnimationEnd', rmCls);
    // this.listen(elem, 'mozAnimationEnd', rmCls);
    // this.listen(elem, 'MSAnimationEnd', rmCls);
    // this.listen(elem, 'oanimationend', rmCls);
    // this.listen(elem, 'animationend', rmCls);

    // this.renderer.listen(elem, 'webkitAnimationEnd',
    //   (event) => {
    //     this.removeClass(elem, x, func);
    // });

    // this.renderer.listen(elem, 'mozAnimationEnd',
    //   (event) => {
    //     this.removeClass(elem, x, func);
    // });

    // this.renderer.listen(elem, 'MSAnimationEnd',
    //   (event) => {
    //     this.removeClass(elem, x, func);
    // });

    // this.renderer.listen(elem, 'oanimationend',
    //   (event) => {
    //     this.removeClass(elem, x, func);
    // });

    // this.renderer.listen(elem, 'animationend',
    //   (event) => {
    //     this.removeClass(elem, x, func);
    //   });
  }

  private realElem(elem) {
    return elem instanceof ElementRef ? elem.nativeElement : elem;
  }

  show(elem, x?, func?) {
    elem = this.realElem(elem);
    elem.style.display = 'block';

    if (x){
      this.cssAnimate(elem, x, function (target) {
        // this.show(target); alert(12)
        // if( func ) {
        //   func();
        // }
      });
    }
  }

  hide(elem, x?, func?) {
    elem = this.realElem(elem);

    if (x){
      this.cssAnimate(elem, x, function (target) {
        target.style.display = 'none';
        // if ( func ) {
        //   func();
        // }
      });

      return;
    }

    elem.style.display = 'none';
  }

}

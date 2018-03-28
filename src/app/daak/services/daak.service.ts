import {Injectable, Renderer2, RendererFactory2} from '@angular/core';

@Injectable()
export class DaakService {

  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  cssAnimate(elem, x, func?) {
    elem = elem.nativeElement;
    var oldAttr = elem.getAttribute('class');
    var removeClass = function (elem, func) {
      elem.classList.remove('animated');
      elem.classList.remove(x);

      if (func) {
        func(elem);
      }
    }

    elem.setAttribute('class', oldAttr + ' ' + x + ' animated');
    this.renderer.listen(elem, 'webkitAnimationEnd',
      (event) => {
        removeClass(elem, func);
    });

    this.renderer.listen(elem, 'mozAnimationEnd',
      (event) => {
        removeClass(elem, func);
    });

    this.renderer.listen(elem, 'MSAnimationEnd',
      (event) => {
        removeClass(elem, func);
    });

    this.renderer.listen(elem, 'oanimationend',
      (event) => {
        removeClass(elem, func);
      });

    this.renderer.listen(elem, 'animationend',
      (event) => {
        removeClass(elem, func);
      });
  }

  show

}

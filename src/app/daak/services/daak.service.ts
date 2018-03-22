import {Injectable, Renderer2, RendererFactory2} from '@angular/core';

@Injectable()
export class DaakService {

  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  cssAnimate(target, x, func?) {
    target = target.nativeElement;
    var oldAttr = target.getAttribute('class');
    var removeClass = function (target, func) {
      target.classList.remove('animated');
      target.classList.remove(x);

      if (func) {
        func(target);
      }
    }

    target.setAttribute('class', oldAttr + ' ' + x + ' animated');
    this.renderer.listen(target, 'webkitAnimationEnd',
      (event) => {
        removeClass(target, func);
    });

    this.renderer.listen(target, 'mozAnimationEnd',
      (event) => {
        removeClass(target, func);
    });

    this.renderer.listen(target, 'MSAnimationEnd',
      (event) => {
        removeClass(target, func);
    });

    this.renderer.listen(target, 'oanimationend',
      (event) => {
        removeClass(target, func);
      });

    this.renderer.listen(target, 'animationend',
      (event) => {
        removeClass(target, func);
      });
  }

}

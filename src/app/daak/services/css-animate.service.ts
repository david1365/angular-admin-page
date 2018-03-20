import {Injectable, Renderer2, RendererFactory2, TemplateRef} from '@angular/core';

@Injectable()
export class CssAnimateService {

  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  cssAnimate(target, x, func?) {
    console.log(target.classList);
    // const elem = target.nativeElement;
    target.classList.add(x + ' animated');
    // this.renderer.listen(target, 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
    //   (event) => {
    //     target.removeClass('animated');
    //     target.removeClass(x);
    //
    //     if (func) {
    //       func(target);
    //     }
    //   });
  }

}

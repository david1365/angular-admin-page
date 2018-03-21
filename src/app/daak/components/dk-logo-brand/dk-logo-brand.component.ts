import {AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {CssAnimateService} from '../../services/css-animate.service';

@Component({
  selector: 'dk-logo-brand',
  templateUrl: './dk-logo-brand.component.html',
  styleUrls: ['./dk-logo-brand.component.css']
})
export class DkLogoBrandComponent implements OnInit, AfterViewInit {
  @Input('icon') icon: string;
  @Input('title') title: string;
  @ViewChild('brand') brand: ElementRef;
  constructor(private cssAnimateService: CssAnimateService, private renderer: Renderer2) { }

  ngOnInit() { }

  ngAfterViewInit() {
      const elem = this.brand.nativeElement;
      this.renderer.listen(elem,'mouseenter', (event) => {
        this.cssAnimateService.cssAnimate(elem, 'bounceIn');
      });
  }

}

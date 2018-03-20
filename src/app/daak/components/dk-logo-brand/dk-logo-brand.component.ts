import {AfterViewInit, Component, ElementRef, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {CssAnimateService} from '../../services/css-animate.service';

@Component({
  selector: 'dk-logo-brand',
  templateUrl: './dk-logo-brand.component.html',
  styleUrls: ['./dk-logo-brand.component.css']
})
export class DkLogoBrandComponent implements OnInit, AfterViewInit {
  @Input('icon') icon: string;
  @Input('title') title: string;
  @ViewChild('brand') brand: TemplateRef<any>;
  constructor(private cssAnimateService: CssAnimateService) { }

  ngOnInit() { }

  ngAfterViewInit() {
      console.log(this.brand.elementRef.innerHTML);
      // const elem = this.brand.nativeElement;
      // this.cssAnimateService.cssAnimate(elem, 'bounceIn');
  }

}

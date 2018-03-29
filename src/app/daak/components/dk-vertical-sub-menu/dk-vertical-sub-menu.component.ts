import {Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {DaakService} from "../../services/daak.service";

@Component({
  selector: 'dk-v-sub-menu',
  templateUrl: './dk-vertical-sub-menu.component.html',
  styleUrls: ['./dk-vertical-sub-menu.component.css']
})
export class DkVerticalSubMenuComponent implements OnInit {
  @Input('icon') icon: string;
  @Input('title') title: string;
  @ViewChild('ul') ul: ElementRef;
  showed: boolean = false;
  constructor(private renderer: Renderer2, private daakService: DaakService) { }

  ngOnInit() {
  }

  doSubMenu(event){
    event.stopPropagation();

    var subMenu = event.target;
    var that = this;
    // if (!this.showed){
    //   this.renderer.addClass(subMenu, 'open');
    //
    //   this.showed = true;
    // }
    // else {
    //   this.renderer.removeClass(subMenu, 'open');
    //   this.showed = false;
    // }

    this.daakService.toggle(this.ul, 'fadeIn',
      'fadeOut',
      function () {
        that.renderer.addClass(subMenu, 'open');
      },
      function () {
        that.renderer.removeClass(subMenu, 'open');
      },
      .2
    )
  }

}

import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DaakService} from '../../services/daak.service';

@Component({
  selector: 'dk-vertical-menu',
  templateUrl: './dk-vertical-menu.component.html',
  styleUrls: ['./dk-vertical-menu.component.css']
})
export class DkVerticalMenuComponent implements OnInit {
  @ViewChild('vMenu') vMenu: ElementRef<any>;
  constructor(private daakService: DaakService) { }

  ngOnInit() {
  }

  show() {
    var menu = this.vMenu.nativeElement;
    menu.style.display = 'block';
    this.daakService.cssAnimate(this.vMenu, 'slideInRight');
  }

}

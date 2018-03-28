import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DaakService} from '../../services/daak.service';

@Component({
  selector: 'dk-vertical-menu',
  templateUrl: './dk-vertical-menu.component.html',
  styleUrls: ['./dk-vertical-menu.component.css']
})
export class DkVerticalMenuComponent implements OnInit {
  @ViewChild('vMenu') vMenu: ElementRef;//<any>;
  constructor(private daakService: DaakService) { }

  ngOnInit() {
  }

  show() {
    this.daakService.show(this.vMenu, 'slideInRight');
  }

  hide() {
    this.daakService.hide(this.vMenu, 'slideOutRight');
  }

  toggle() {
    this.daakService.toggle(this.vMenu, 'slideInRight', 'slideOutRight')
  }
}

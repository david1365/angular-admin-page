import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DkVerticalMenuComponent} from '../dk-vertical-menu/dk-vertical-menu.component';

@Component({
  selector: 'dk-portal',
  templateUrl: './dk-portal.component.html',
  styleUrls: ['./dk-portal.component.css']
})
export class DkPortalComponent implements OnInit {
  @ViewChild('vmenu') vMenu: DkVerticalMenuComponent;//ElementRef<DkVerticalMenuComponent>;
  constructor() { }

  ngOnInit() {
  }

  doMenu() {
    this.vMenu.show();
    // this.vMenu.nativeElement.style.display = 'block';
  }

}

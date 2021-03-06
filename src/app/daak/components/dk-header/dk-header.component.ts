import {/*Attribute,*/ Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DkVerticalMenuComponent} from '../dk-vertical-menu/dk-vertical-menu.component';

@Component({
  selector: 'dk-header',
  templateUrl: './dk-header.component.html',
  styleUrls: ['./dk-header.component.css']
})
export class DkHeaderComponent implements OnInit {
  // brand;
  // icon;
  @Output() onMenu = new EventEmitter();
  constructor( /*@Attribute("brand") brand, @Attribute("icon") icon*/ ) {
      // this.brand = brand;
      // this.icon = icon;
  }

  ngOnInit() {
  }

  doMenu(event) {
    this.onMenu.emit(event);
  }

}

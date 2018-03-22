import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'dk-circle-menu',
  templateUrl: './dk-circle-menu.component.html',
  styleUrls: ['./dk-circle-menu.component.css']
})
export class DkCircleMenuComponent implements OnInit {
  @Output() onMenu = new EventEmitter();
  constructor() {

  }

  ngOnInit() {
  }

  doMenu(event) {
    this.onMenu.emit(event);
  }

}

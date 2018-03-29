import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'dk-vertical-sub-menu',
  templateUrl: './dk-vertical-sub-menu.component.html',
  styleUrls: ['./dk-vertical-sub-menu.component.css']
})
export class DkVerticalSubMenuComponent implements OnInit {
  @Input('icon') icon: string;
  @Input('title') title: string;
  constructor() { }

  ngOnInit() {
  }

}

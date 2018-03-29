import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'dk-v-active-sub-menu',
  templateUrl: './dk-vertical-active-sub-menu.component.html',
  styleUrls: ['./dk-vertical-active-sub-menu.component.css']
})
export class DkVerticalActiveSubMenuComponent implements OnInit {
  @Input('url') url: string;
  @Input('icon') icon: string;
  @Input('title') title: string;
  constructor() { }

  ngOnInit() {
  }

}

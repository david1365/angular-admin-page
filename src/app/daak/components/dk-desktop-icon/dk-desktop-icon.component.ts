import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'dk-desktop-icon',
  templateUrl: './dk-desktop-icon.component.html',
  styleUrls: ['./dk-desktop-icon.component.css']
})
export class DkDesktopIconComponent implements OnInit {
  @Input('icon') icon: string;
  @Input('title') title: string;

  constructor() { }

  ngOnInit() {
  }

}

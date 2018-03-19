import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'dk-circle-button',
  templateUrl: './dk-circle-button.component.html',
  styleUrls: ['./dk-circle-button.component.css']
})
export class DkCircleButtonComponent implements OnInit {
  @Input('type') type: string;

  constructor() { }

  ngOnInit() {
  }

}

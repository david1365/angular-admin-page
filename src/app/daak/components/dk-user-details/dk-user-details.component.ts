import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'dk-user-details',
  templateUrl: './dk-user-details.component.html',
  styleUrls: ['./dk-user-details.component.css']
})
export class DkUserDetailsComponent implements OnInit {
  @Input('image') image: string;
  @Input('title') title: string;
  constructor() { }

  ngOnInit() {
  }

}

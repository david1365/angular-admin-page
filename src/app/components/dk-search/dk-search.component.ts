import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dk-search',
  templateUrl: './dk-search.component.html',
  styleUrls: ['./dk-search.component.css']
})
export class DkSearchComponent implements OnInit {
  @Input('type') type: string;

  constructor() { }

  ngOnInit() {
  }

}

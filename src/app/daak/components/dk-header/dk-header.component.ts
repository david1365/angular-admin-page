import {Attribute, Component, OnInit} from '@angular/core';

@Component({
  selector: 'dk-header',
  templateUrl: './dk-header.component.html',
  styleUrls: ['./dk-header.component.css']
})
export class DkHeaderComponent implements OnInit {
  // brand;
  // icon;

  constructor( /*@Attribute("brand") brand, @Attribute("icon") icon*/ ) {
      // this.brand = brand;
      // this.icon = icon;
  }

  ngOnInit() {
  }

}

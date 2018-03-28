import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DkVerticalMenuComponent} from '../dk-vertical-menu/dk-vertical-menu.component';

@Component({
  selector: 'dk-portal',
  templateUrl: './dk-portal.component.html',
  styleUrls: ['./dk-portal.component.css']
})
export class DkPortalComponent implements OnInit {
  private showedVMenu: boolean = false;
  @ViewChild('vmenu') vMenu: DkVerticalMenuComponent;//ElementRef<DkVerticalMenuComponent>;
  constructor() { }

  ngOnInit() {
  }

  doMenu() {
    // alert(this.showedVMenu)
    // if (this.showedVMenu == false) {
    //   this.vMenu.show();
    //   this.showedVMenu = true;
    // }
    // else {
    //   this.vMenu.hide();
    //   this.showedVMenu = false;
    // }

    this.vMenu.toggle()
  }

}

import {Component, Inject, Input, OnInit} from '@angular/core';
import {DkVerticalMenuComponent} from '../dk-vertical-menu/dk-vertical-menu.component';
import {DaakService} from "../../services/daak.service";

@Component({
  selector: 'dk-v-active-sub-menu',
  templateUrl: './dk-vertical-active-sub-menu.component.html',
  styleUrls: ['./dk-vertical-active-sub-menu.component.css']
})
export class DkVerticalActiveSubMenuComponent implements OnInit {
  @Input('url') url: string;
  @Input('icon') icon: string;
  @Input('title') title: string;
  constructor(@Inject(DkVerticalMenuComponent) private parent: DkVerticalMenuComponent,
               private daakService: DaakService) {}

  ngOnInit(): void {
  }

  activeClick(event) {
    event.stopPropagation();
    if (!this.daakService.yScrolled) {
      this.parent.hide();
    }
  }
}

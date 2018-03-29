import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DaakService} from "../../services/daak.service";

@Component({
  selector: 'dk-desktop',
  templateUrl: './dk-desktop.component.html',
  styleUrls: ['./dk-desktop.component.css']
})
export class DkDesktopComponent implements OnInit, AfterViewInit {
  @ViewChild('desktop') desktop: ElementRef;
  constructor(private daakService: DaakService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.daakService.yScrolling(this.desktop/*, () => alert(123)*/);
  }
}

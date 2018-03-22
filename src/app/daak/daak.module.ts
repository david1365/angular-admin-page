import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DkPortalComponent} from './components/dk-portal/dk-portal.component';
import {DkCircleButtonComponent} from './components/dk-circle-button/dk-circle-button.component';
import {DkSearchComponent} from './components/dk-search/dk-search.component';
import {DkDesktopIconComponent} from './components/dk-desktop-icon/dk-desktop-icon.component';
import {DkLogoBrandComponent} from './components/dk-logo-brand/dk-logo-brand.component';
import {DkHeaderComponent} from './components/dk-header/dk-header.component';
import {DaakService} from './services/daak.service';
import { DkUserDetailsComponent } from './components/dk-user-details/dk-user-details.component';
import { DkCircleMenuComponent } from './components/dk-circle-menu/dk-circle-menu.component';
import { DkVerticalMenuComponent } from './components/dk-vertical-menu/dk-vertical-menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DkPortalComponent,
    DkHeaderComponent,
    DkCircleButtonComponent,
    DkSearchComponent,
    DkDesktopIconComponent,
    DkLogoBrandComponent,
    DkUserDetailsComponent,
    DkCircleMenuComponent,
    DkVerticalMenuComponent
  ],
  declarations: [
    DkHeaderComponent,
    DkPortalComponent,
    DkCircleButtonComponent,
    DkSearchComponent,
    DkDesktopIconComponent,
    DkLogoBrandComponent,
    DkUserDetailsComponent,
    DkCircleMenuComponent,
    DkVerticalMenuComponent
  ],
  providers: [
    DaakService
  ],
})
export class DaakModule {
}
